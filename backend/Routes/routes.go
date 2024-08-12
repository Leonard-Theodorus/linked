package routes

import (
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "linked-backend/Controllers"
)

func SetupRoutes () *gin.Engine{
    r := gin.Default()
    r.Use(cors.Default())

    r.GET("/links", controllers.GetLinks)
    r.POST("/link", controllers.CreateLink)
    r.DELETE("/link/:id", controllers.DeleteLink)
    return r
}
