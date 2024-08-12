package models

import (
	"github.com/jinzhu/gorm"
)

type LinkItem struct {
    gorm.Model
    Link string `json:"link"` 
    Title string `json:"title"`
    Topic string `json:"topic"`
}
