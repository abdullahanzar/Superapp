import React, {useState, useEffect} from 'react'
import './CategoryPage.css'
import Button from './Button'
import Card from './Card'
import action from './Components/Action.png'
import romance from './Components/Romance.png'
import drama from './Components/Drama.png'
import thriller from './Components/Thriller.png'
import western from './Components/Western.png'
import horror from './Components/Horror.png'
import fantasy from './Components/Fantasy.png'
import music from './Components/Music.png'
import fiction from './Components/Fiction.png'



export default function CategoryPage() {
    const [categories, setCategories] = useState({
        romance: false,
        action: false,
        drama: false,
        thriller: false,
        western: false,
        horror: false,
        fantasy: false,
        music: false,
        fiction: false
    })

    useEffect(()=>{
        console.log(categories)
    }, [categories])

    function closed(element) {
        if(element=='Romance')
        setCategories(prev=>({...prev, romance: true}))
        if(element=='Action')
        setCategories(prev=>({...prev, action: true}))
        if(element=='Drama')
        setCategories(prev=>({...prev, drama: true}))
        if(element=='Fantasy')
        setCategories(prev=>({...prev, fantasy: true}))
        if(element=='Fiction')
        setCategories(prev=>({...prev, fiction: true}))
        if(element=='Horror')
        setCategories(prev=>({...prev, horror: true}))
        if(element=='Music')
        setCategories(prev=>({...prev, music: true}))
        if(element=='Thriller')
        setCategories(prev=>({...prev, drama: true}))
        if(element=='Western')
        setCategories(prev=>({...prev, western: true}))
    }

  return (
    <div className='CategoryPage'>
    <div className='cpLeft'>
        <p className='cpSALOGO'>Super app</p>
        <br />
        <h1 className='cpChooseText'>Choose your entertainment category</h1>
        <br />
        <div className='cpTagContainer'>
        {!categories.romance&&<Button color="green" xColor= "#085C00" test={closed}>Romance</Button>}
        {!categories.action&&<Button color="green" xColor= "#085C00" test={closed}>Action</Button>}
        {!categories.drama&&<Button color="green" xColor= "#085C00" test={closed}>Drama</Button>}
        {!categories.fantasy&&<Button color="green" xColor= "#085C00" test={closed}>Fantasy</Button>}
        {!categories.fiction&&<Button color="green" xColor= "#085C00" test={closed}>Fiction</Button>}
        {!categories.horror&&<Button color="green" xColor= "#085C00" test={closed}>Horror</Button>}
        {!categories.music&&<Button color="green" xColor= "#085C00" test={closed}>Music</Button>}
        {!categories.thriller&&<Button color="green" xColor= "#085C00" test={closed}>Thriller</Button>}
        {!categories.thriller&&<Button color="green" xColor= "#085C00" test={closed}>Western</Button>}
        </div>
    </div>
    <div className='cpRight'>
        <Card source={action} color='#FF5209'>Action</Card>
        <Card source={drama} color='#D7A4FF'>Drama</Card>
        <Card source={fantasy} color='#FF4ADE'>Fantasy</Card>
        <Card source={fiction} color='#6CD061'>Fiction</Card>
        <Card source={horror} color='#7358FF'>Horror</Card>
        <Card source={thriller} color='#84C2FF'>Thriller</Card>
        <Card source={western} color='#912500'>Western</Card>
        <Card source={romance} color='#148A08'>Romance</Card>
        <Card source={music} color='#E61E32'>Music</Card>
    </div>
    </div>
  )
}
