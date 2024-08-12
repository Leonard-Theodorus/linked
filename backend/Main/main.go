package main

import(
    "linked-backend/Database"
    "linked-backend/Models"
    "linked-backend/Routes"
    "github.com/joho/godotenv"
)


func main () {
    err := godotenv.Load()
    if err != nil {
        panic(".env can't be loaded")
    }
    database.Connect()
    defer database.GetDB().Close()

    database.GetDB().AutoMigrate(&models.LinkItem{})
    r := routes.SetupRoutes()
    r.Run(":8080")
}
