package routes

import (
    "github.com/gin-gonic/gin"
    "linked-backend/Controllers"
)

func SetupRoutes () *gin.Engine{
    r := gin.Default()

    r.GET("/links", controllers.GetLinks)
    r.POST("/link", controllers.CreateLink)
    r.DELETE("/link/:id", controllers.DeleteLink)
    return r
}
