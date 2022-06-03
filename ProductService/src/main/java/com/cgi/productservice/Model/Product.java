package com.cgi.productservice.Model;

import javax.persistence.*;


@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 240, unique = true)
    private String title;

    @Column(nullable = false, length = 240)
    private String description;

    @Column(nullable = false, length = 240)
    private Double price;

    @Column(nullable = true, length = 240)
    private String url;

    public Product(){}

    public Product(Long id, String title, String description, Double price, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
