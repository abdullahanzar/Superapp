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

    // useEffect(()=>{
    //     console.log(categories)
    // }, [categories])

    function closed(element) {
        if(element==='Romance')
        setCategories(prev=>({...prev, romance: false}))
        if(element==='Action')
        setCategories(prev=>({...prev, action: false}))
        if(element==='Drama')
        setCategories(prev=>({...prev, drama: false}))
        if(element==='Fantasy')
        setCategories(prev=>({...prev, fantasy: false}))
        if(element==='Fiction')
        setCategories(prev=>({...prev, fiction: false}))
        if(element==='Horror')
        setCategories(prev=>({...prev, horror: false}))
        if(element==='Music')
        setCategories(prev=>({...prev, music: false}))
        if(element==='Thriller')
        setCategories(prev=>({...prev, thriller: false}))
        if(element==='Western')
        setCategories(prev=>({...prev, western: false}))
    }

    function isSelected(element, yes) {
        if(yes) {
        if(element==='Romance')
        setCategories(prev=>({...prev, romance: true}))
        if(element==='Action')
        setCategories(prev=>({...prev, action: true}))
        if(element==='Drama')
        setCategories(prev=>({...prev, drama: true}))
        if(element==='Fantasy')
        setCategories(prev=>({...prev, fantasy: true}))
        if(element==='Fiction')
        setCategories(prev=>({...prev, fiction: true}))
        if(element==='Horror')
        setCategories(prev=>({...prev, horror: true}))
        if(element==='Music')
        setCategories(prev=>({...prev, music: true}))
        if(element==='Thriller')
        setCategories(prev=>({...prev, thriller: true}))
        if(element==='Western')
        setCategories(prev=>({...prev, western: true}))
        }
        else {
        if(element==='Romance')
        setCategories(prev=>({...prev, romance: false}))
        if(element==='Action')
        setCategories(prev=>({...prev, action: false}))
        if(element==='Drama')
        setCategories(prev=>({...prev, drama: false}))
        if(element==='Fantasy')
        setCategories(prev=>({...prev, fantasy: false}))
        if(element==='Fiction')
        setCategories(prev=>({...prev, fiction: false}))
        if(element==='Horror')
        setCategories(prev=>({...prev, horror: false}))
        if(element==='Music')
        setCategories(prev=>({...prev, music: false}))
        if(element==='Western')
        setCategories(prev=>({...prev, western: false}))
        if(element==='Thriller')
        setCategories(prev=>({...prev, thriller: false}))
        }
    }

  return (
    <div className='CategoryPage'>
    <div className='cpLeft'>
        <p className='cpSALOGO'>Super app</p>
        <br />
        <h1 className='cpChooseText'>Choose your entertainment category</h1>
        <br />
        <div className='cpTagContainer'>
        {categories.action&&<Button color="green" xColor= "#085C00" test={closed}>Action</Button>}
        {categories.drama&&<Button color="green" xColor= "#085C00" test={closed}>Drama</Button>}
        {categories.fantasy&&<Button color="green" xColor= "#085C00" test={closed}>Fantasy</Button>}
        {categories.fiction&&<Button color="green" xColor= "#085C00" test={closed}>Fiction</Button>}
        {categories.horror&&<Button color="green" xColor= "#085C00" test={closed}>Horror</Button>}
        {categories.thriller&&<Button color="green" xColor= "#085C00" test={closed}>Thriller</Button>}
        {categories.western&&<Button color="green" xColor= "#085C00" test={closed}>Western</Button>}
        {categories.romance&&<Button color="green" xColor= "#085C00" test={closed}>Romance</Button>}
        {categories.music&&<Button color="green" xColor= "#085C00" test={closed}>Music</Button>}
        </div>
    </div>
    <div className='cpRight'>
        <Card source={action} color='#FF5209' isSelect={isSelected} showState={categories.action}>Action</Card>
        <Card source={drama} color='#D7A4FF' isSelect={isSelected} showState={categories.drama}>Drama</Card>
        <Card source={fantasy} color='#FF4ADE' isSelect={isSelected} showState={categories.fantasy}>Fantasy</Card>
        <Card source={fiction} color='#6CD061' isSelect={isSelected} showState={categories.fiction}>Fiction</Card>
        <Card source={horror} color='#7358FF' isSelect={isSelected} showState={categories.horror}>Horror</Card>
        <Card source={thriller} color='#84C2FF' isSelect={isSelected} showState={categories.thriller}>Thriller</Card>
        <Card source={western} color='#912500' isSelect={isSelected} showState={categories.western}>Western</Card>
        <Card source={romance} color='#148A08' isSelect={isSelected} showState={categories.romance}>Romance</Card>
        <Card source={music} color='#E61E32' isSelect={isSelected} showState={categories.music}>Music</Card>
    </div>
    </div>
  )
}
