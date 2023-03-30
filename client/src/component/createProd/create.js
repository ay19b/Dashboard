import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import {SlPicture} from "react-icons/sl"
import "./create.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {MdOutlineAddPhotoAlternate,MdCancel} from 'react-icons/md'


const names = [
    'Supermarché',
    'Mode',
    'Électroménager, TV & Audio',
    'Informatique',
    'Articles de sport',
    'Téléphonie & Accessoires',
  ];


export default function Create() {
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [disc, setDisc] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);
    const [imageAdd, setImageAdd] = useState([]);
    const [errorName, setErrorName] = useState(false);
    const [errorImage, setErrorImage] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorStock, setErrorStock] = useState(false);
    const [errorCatg, setErrorCatg] = useState(false);
    const api = "http://localhost:3001";
    const navigate = useNavigate();

      const handleFileInput = (event) => {
        const files = Array.from(event.target.files);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]); // Only read the first file
      
        reader.onload = () => {
          // Add the new image to the existing images
          setImages([...images, {
            url: reader.result,
            alt: files[0].name
          }]);
        };
        if (reader) setErrorImage(false);
      };
  
      const handleDrop = (event) => {
        console.log('handleDrop called with files:', event.dataTransfer.files);
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        const newImages = files.filter(file => file.type.startsWith('image/')).map(file => ({
          url: URL.createObjectURL(file),
          alt: file.name
        }));
        setImages([...images, ...newImages]);
        if (newImages) setErrorImage(false);
      }  

      const handleRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
      }

      useEffect(() => {
        const imagesArray = [];
        for (let i = 1; i < images.length; i++) {
          imagesArray.push(images[i]);
        }
        setImageAdd(imagesArray);
      }, [imageAdd]);


      function handleNameChange(event) {
        const inputName = event.target.value;
        if (inputName) setErrorName(false);
        setName(inputName);
      }
      
      function handleStockChange(event) {
        const inputStock = event.target.value;
        if (inputStock) setErrorStock(false);
        setStock(inputStock);
      }
      
      function handlePriceChange(event) {
        const inputPrice = event.target.value;
        if (inputPrice) setErrorPrice(false);
        setPrice(inputPrice);
      }
      
      function handleCatgChange(event) {
        const inputCatg = event.target.value;
        if (inputCatg) setErrorCatg(false);
        setCategory(inputCatg);
      }
  

      function createUser(){
        if(category && images.length>0 && name && price && stock){
          axios.post(`${api}/createProd`,{category,images,name,price,disc,stock})
          .then(res=>res.data);
          navigate("/products")
        }else{
          setErrorName(!name);
          setErrorStock(!stock);
          setErrorImage(!(images.length > 0));
          setErrorPrice(!price);
          setCategory(!category);
        }      
      }
      
    
  return (
    <div className='create'>
      <h3 className='title'>Add New Product</h3>
      <div className='form'>
        <div className='topForm'>
          <div className='addImage'>
          <div className='imageAdded' onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
            {images.length>0?
            <div className='image'>
              <img src={images[0].url} />
            <MdCancel className='remove' onClick={() => handleRemove(0)}/>
          </div>:
            <>
              <SlPicture />
              <h3>Drop your images here,or select click browser</h3>
              <input type="file"  onChange={handleFileInput}/>
            </>
            }
          </div>
          <div className='listImage'>
            {imageAdd.map((imageUrl,index)=> (
               <div className='image' key={index}>
                 <img key={index} src={imageUrl.url} />
                 <MdCancel className='remove' onClick={() => handleRemove(index+1)}/>
               </div>
             ))}
           {images.length>0?
            <div className='boxUpload' onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
             <MdOutlineAddPhotoAlternate/>
             <input type="file"  onChange={handleFileInput}/>
            </div>:null
           }
          </div>
          {errorImage && <FormHelperText>Add image</FormHelperText>}
          </div>
          <div className='inputInf'>
          <TextField
            className='name'
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            error={errorName}
            helperText={errorName ? "Add name product" : ""}
            fullWidth
          />
          <FormControl fullWidth className='category'>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleCatgChange}
            >
              {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
               >
              {name}
            </MenuItem>
          ))}  
            </Select>
            {errorCatg && <FormHelperText>Add category</FormHelperText>}
          </FormControl>
          <TextField
            className='price'
            label="price"
            value={price}
            onChange={handlePriceChange}
            name="numberformat"
            id="outlined-basic"
            variant="outlined"
            error={errorPrice}
            helperText={errorPrice ? "Add price" : ""}
            fullWidth
          />
          <TextField
            className='price'
            label="quantity"
            value={stock}
            onChange={handleStockChange}
            name="numberformat"
            id="outlined-basic"
            variant="outlined"
            error={errorStock}
            helperText={errorStock ? "Add stock" : ""}
            fullWidth
          />
          </div>
        </div>
          <TextField
              className='disc'
              id="outlined-multiline-static"
              label="Discription"
              multiline
              rows={4}
              value={disc}
              onChange={(event) => setDisc(event.target.value)}
              fullWidth 
             />
          <button className='btn' onClick={createUser}>Add product</button>
      </div>  
    </div>
  )
}
