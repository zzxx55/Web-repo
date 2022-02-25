import("style.scss")

import { drawGalleryItem } from 'item.js'
import items from 'items.js'
const galleryRootElement = document.querySelector('gallery')
item.map(item => galleryRootElement.appendChild(drawGalleryItem))