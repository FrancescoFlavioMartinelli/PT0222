import {useState} from "react";

export const FormComponent = ()=>{

    const [src, setSrc] = useState("");

    const submit = async (e)=>{
        e.preventDefault();
        
        let data = new FormData();
        data.append('uploadImage', e.target[0].files[0]) //il primo parametro è il name che usereme nel metodo single di multer

        let res = await fetch("http://localhost:3001/upload", {
            method: 'POST',
            body: data
        }).then(res=>res.json())
        console.log("RESPONSE", res);
        setSrc(res.upload);
        //aggiungere dati al backend
    }
    return (<form onSubmit={submit} enctype="multipart/form-data">
        <input type="file" name="uploadImage" />
        <button type="submit">Invia</button>


        <img src={src} />
    </form>)
}