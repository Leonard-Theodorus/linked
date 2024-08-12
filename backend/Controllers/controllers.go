package controllers

import (
    "fmt"
	"linked-backend/Database"
	"linked-backend/Models"
	"net/http"
	"github.com/gin-gonic/gin"
)

func GetLinks(c *gin.Context) {
    var links []models.LinkItem
    database.GetDB().Find(&links)
    fmt.Println(links)
    c.JSON(http.StatusOK, links)
}

func CreateLink(c *gin.Context) {
    var link models.LinkItem
    err := c.ShouldBindBodyWithJSON(&link)

    if err != nil {
        // Return a JSON consisting Error
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    database.GetDB().Create(&link)
    c.JSON(http.StatusOK, link)
}

func DeleteLink(c *gin.Context) {
    id := c.Param("id")
    var linkItem models.LinkItem
    if database.GetDB().First(&linkItem, id).RecordNotFound() {
        c.JSON(http.StatusNotFound, gin.H{"error" : "Item not found"})
        return
    }
    database.GetDB().Delete(&linkItem)
    c.JSON(http.StatusOK, gin.H{"message" : "Item deleted"})
}
