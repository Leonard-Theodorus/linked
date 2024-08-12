package database

import (
	"fmt"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var DB *gorm.DB

func Connect() {

    dbDetail := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local",
        os.Getenv("DB_USER"),
        os.Getenv("DB_PASSWORD"),
        os.Getenv("DB_HOST"),
        os.Getenv("DB_PORT"),
        os.Getenv("DB_NAME"),
    )

    d , err := gorm.Open("mysql", dbDetail)
    if err != nil {
        log.Fatal("Fail to connect to db", err)
    }
    DB = d
    fmt.Println("Sucesfully connected to DB")
}

func GetDB () *gorm.DB {
    return DB
}

