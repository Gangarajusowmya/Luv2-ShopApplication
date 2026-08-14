package com.project.spring_boot_ecommerce.config;

import com.project.spring_boot_ecommerce.entity.Product;
import com.project.spring_boot_ecommerce.entity.ProductCategory;
import jakarta.persistence.EntityManager;

import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

// This class is used to customize Spring Data REST API behavior.
// By default, Spring Data REST creates CRUD APIs (GET, POST, PUT, DELETE).
// Here we are restricting some HTTP methods for Product entity.
@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    // This method is called by Spring Data REST during application startup.
    // We can customize REST endpoint exposure, HTTP methods, CORS settings, etc.


    private EntityManager entityManager;
    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager)
    {
        entityManager = theEntityManager;
    }
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        //RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        // HTTP methods that we want to disable for Product API.
        // PUT    -> Update existing product
        // POST   -> Create new product
        // DELETE -> Remove product
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
        //disable Http methods for product: push,post and delte

        // Apply restrictions only to Product entity.
        // ProductCategory API will not be affected.
        config.getExposureConfiguration()       //controlling which RestApis are available
                .forDomainType(Product.class)   //I was applying only for product entity configuration


                // Controls individual product endpoint:
                // Example:
                // GET    /api/products/1
                // PUT    /api/products/1
                // DELETE /api/products/1
                //
                // Disabling PUT and DELETE here means users can only view a product.
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))


                // Controls collection endpoint:
                // Example:
                // GET  /api/products
                // POST /api/products
                //
                // Disabling POST prevents creating new products through REST API.
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        //so here the same process applies for the product category i only made them read only

        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));


        //call an internal helper method
        exposeIds(config);
    }
    private void exposeIds(RepositoryRestConfiguration config) {
        //expose entity ids
        //get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        //create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();

        //get the Entity types for the entities

        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }

        //expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray((new Class[0]));
        config.exposeIdsFor(domainTypes);
    }
    }

