import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import {MdOutlineAddPhotoAlternate,MdCancel} from 'react-icons/md'
import {SlPicture} from "react-icons/sl"
import "./product.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';


const names = [
    'Supermarché',
    'Mode',
    'Électroménager, TV & Audio',
    'Informatique',
    'Articles de sport',
    'Téléphonie & Accessoires',
  ];


export default function Update({handleClose,id}) {
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [disc, setDisc] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageAdd, setImageAdd] = useState([]);
    const [errorName, setErrorName] = useState(false);
    const [errorImage, setErrorImage] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorStock, setErrorStock] = useState(false);
    const [errorCatg, setErrorCatg] = useState(false);
    const api = "https://control-panel-ua7l.vercel.app";
    const navigate = useNavigate();

    const handleChangeTypes = (event) => {
      setCategory(event.target.value);
      };

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
        for (let i = 1; i < images?.length; i++) {
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

      useEffect(() => {
        axios.put(`${api}/products/${id}`)
        .then(res => {
          setName(res.data.name)
          setCategory(res.data.category)
          setPrice(res.data.price)
          setStock(res.data.stock)
          setDisc(res.data.disc)
          setImages(res.data.images)
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
      }, []);
  


      const handleSubmit = async (e, handleClose) => {
        e.preventDefault();
        setLoading(true);
        try {
          const updatedProduct = {
            _id: id,name,category,price,stock,disc,images,
          };
          // Check if required fields have values before sending the request
          if (category && images.length>0 && name && price && stock) {
            await axios.put(`${api}/products/${id}`, updatedProduct);
            setLoading(false);
            handleClose(true);
          } else {
            setErrorName(!name);
            setErrorStock(!stock);
            setErrorImage(!(images.length > 0));
            setErrorPrice(!price);
            setErrorCatg(!category);
            setLoading(false);
          }
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
    
  return (
    <div className='update'>
      <MdCancel className='cancel' onClick={handleClose}/>
      <h3 className='title'>Update Product</h3>
      {!loading?
      <form className='form' onSubmit={(e) => handleSubmit(e, handleClose)}>
        <div className='topForm'>
          <div className='addImage'>
          <div className='imageAdded' onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
            {images && images.length>0?
            <div className='image'>
              <img src={images[0].url} />
              <MdCancel className='remove' onClick={() => handleRemove(0)}/>
            </div>
            :
            <>
              <SlPicture />
              <h3>Drop your images here,or select click browser</h3>
              <input type="file"  onChange={handleFileInput}/>
            </>
            }
          </div>
          <div className='listImage'>
          {imageAdd.map((imageUrl,index)=> (
              <div className='image' id={index} key={index}>
               <img key={index} src={imageUrl.url} />
               <MdCancel className='remove' onClick={() => handleRemove(index+1)}/>
               </div>
             ))
            }
           {images && images.length>0?
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
            name="numberformat"
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
              onChange={handleChangeTypes}
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
          <button className='btn' type="submit">Update product</button>
      </form>:
        <div className='skeleton'>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
        <Skeleton variant="rectangular" height={210} />
      </div>  
      }
    </div>
  )
}
