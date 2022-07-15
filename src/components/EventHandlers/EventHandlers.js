import { toPng } from 'html-to-image';


const onImageChange1 = (e, setImg) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
}

 //image downloading method starts
 const imageDownload = async (ref,) => {
    if (ref.current === null) {
        return
    }
    toPng(ref.current)
        .then(async (dataUrl) => {
            const link = document.createElement('a')
            link.download = 'Download.png'
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
}
//image downloading method ends

export {
    onImageChange1,imageDownload
}