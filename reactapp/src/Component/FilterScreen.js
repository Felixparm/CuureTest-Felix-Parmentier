import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import '../App.css'
import Navigation from './navbar'
import {NavLink} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

 function FilterScreen(props) {

  const [DisplaySubCat, setDisplaySubCat] = useState([]);

  const [DisplaySecondFilter1, setDisplaySecondFilter1] = useState(false);
  const [DisplaySecondFilter2, setDisplaySecondFilter2] = useState(false);
  const [DisplaySecondFilter3, setDisplaySecondFilter3] = useState(false);
  const [DisplaySecondFilter4, setDisplaySecondFilter4] = useState(false);
  const [DisplaySecondFilter5, setDisplaySecondFilter5] = useState(false);
  const [DisplaySecondFilter6, setDisplaySecondFilter6] = useState(false);


  const [colorButton1, setColorButton1] = useState(false);
  const [colorButton2, setColorButton2] = useState(false);
  const [colorButton3, setColorButton3] = useState(false);
  const [colorButton4, setColorButton4] = useState(false);
  const [colorButton5, setColorButton5] = useState(false);
  const [colorButton6, setColorButton6] = useState(false);

  const [subCatSelected, setSubCatSelected] = useState(false);

  const [subCatName, setSubCatName] = useState('');

  const[goToResultScreen,setGoToResultScreen]=useState(false)

  var subCat1 = [
    { subcategory: "Sièges Auto" },
    { subcategory: "Nacelles" },
    { subcategory: "Poussettes" },
    { subcategory: "Landeaux" },
    { subcategory: "Portes-Bébé" },
    { subcategory: "Sacs à Langer" },
    { subcategory: "Se déplacer / Autre" },
  ]

  var subCat2 = [
    { subcategory: "de 0 à 3 mois" },
    { subcategory: "de 4 à 6 mois" },
    { subcategory: "de 7 à 12 mois" },
    { subcategory: "de 13 à 18 mois" },
    { subcategory: "de 19 à 24 mois" },
    { subcategory: "de 2 à 3 ans" },
    { subcategory: "Autres" },
  ]

  var subCat3 = [
    { subcategory: "Baignoires" },
    { subcategory: "Transats de bain" },
    { subcategory: "Lingettes-Serviettes" },
    { subcategory: "Thermometres" },
    { subcategory: "Jouets de bain" },
    { subcategory: "Se baigner / Autre" },
  ]

  var subCat4 = [
    { subcategory: "Lits bébé" },
    { subcategory: "Lits de voyage" },
    { subcategory: "Linges de lit" },
    { subcategory: "Gigoteuses" },
    { subcategory: "Veilleuses" },
    { subcategory: "Babyphones" },
    { subcategory: "Dormir / Autre" },
  ]

  var subCat5 = [
    { subcategory: "Biberons" },
    { subcategory: "Chauffe-Biberons" },
    { subcategory: "Stérilisateurs" },
    { subcategory: "Robots de Cuisine" },
    { subcategory: "Vaiselles" },
    { subcategory: "Accessoires" },
    { subcategory: "Manger / Autre" },
  ]

  var subCat6= [
    {subcategory:'Autre'}
  ]


  if (DisplaySecondFilter1 == true) {
    setDisplaySubCat(subCat1)
    setDisplaySecondFilter1(false)
  }
  else if (DisplaySecondFilter2 == true) {
    setDisplaySubCat(subCat2)
    setDisplaySecondFilter2(false)
  }
  else if (DisplaySecondFilter3 == true) {
    setDisplaySubCat(subCat3)
    setDisplaySecondFilter3(false)
  }
  else if (DisplaySecondFilter4 == true) {
    setDisplaySubCat(subCat4)
    setDisplaySecondFilter4(false)
  }
  else if (DisplaySecondFilter5 == true) {
    setDisplaySubCat(subCat5)
    setDisplaySecondFilter5(false)
  }
  else if (DisplaySecondFilter6 == true) {
    setDisplaySubCat(subCat6)
    setDisplaySecondFilter6(false)
  }

  var validationButton

let InputSubCat='';
let optionSubCat='';
let buttonValidation='';
if(DisplaySubCat!='')
   { 
 
    let optionSubCat= DisplaySubCat.map((e,i) => {
    return (<option> {e.subcategory}</option>)
})

InputSubCat = <Input type="select" name="select" onChange={(e) => {setSubCatName(e.target.value)}} className='inputSell'>
                 {optionSubCat}
              </Input>

buttonValidation=<div className='buttonSearch'><Button
className='buttonFilter'
title='Rechercher'
onClick={() =>{props.onSubCatSelected(subCatName);setGoToResultScreen(true)}} 
style={{backgroundColor:'#65378a'}}
 >Rechercher</Button></div>
}
if(goToResultScreen==true){
  return <Redirect to='/resultat'/>
}

  return (
    <div>
    <Navigation/>
      <h4 className='titleRow'>Choisissez une catégorie</h4>
      <div className='buttonRow'>
        <Button 
         className='buttonFilter'
          onClick={() => {
            setDisplaySecondFilter1(true);
            setColorButton1(!colorButton1);
            setColorButton2(false);
            setColorButton3(false);
            setColorButton4(false);
            setColorButton5(false);
            setColorButton6(false)
          }}
          style={{backgroundColor:'#65378a'}}>Se déplacer</Button>


        <Button title="S'habiller"
          className='buttonFilter'
          onClick={() => {
            setDisplaySecondFilter2(true);
            setColorButton2(!colorButton2);
            setColorButton1(false);
            setColorButton3(false);
            setColorButton4(false);
            setColorButton5(false);
            setColorButton6(false)
          }}
          style={{backgroundColor:'#65378a'}}>S'habiller</Button>
      </div>

      <div className='buttonRow'>
        <Button title='Se baigner'
          className='buttonFilter'
          
          onClick={() => {
            setDisplaySecondFilter3(true);
            setColorButton3(!colorButton3);
            setColorButton1(false);
            setColorButton2(false);
            setColorButton4(false);
            setColorButton5(false);
            setColorButton6(false)
          }}
          style={{backgroundColor:'#65378a'}}>Se baigner</Button>

        <Button 
          className='buttonFilter'
          onClick={() => {
            setDisplaySecondFilter4(true);
            setColorButton4(!colorButton4);
            setColorButton1(false);
            setColorButton2(false);
            setColorButton3(false);
            setColorButton5(false);
            setColorButton6(false)
          }}
          style={{backgroundColor:'#65378a'}}>Dormir</Button>
      </div>

      <div className='buttonRow'>
        <Button 
         className='buttonFilter'
          onClick={() => {
            setDisplaySecondFilter5(true);
            setColorButton5(!colorButton5);
            setColorButton1(false);
            setColorButton2(false);
            setColorButton3(false);
            setColorButton4(false);
            setColorButton6(false)
          }}
          style={{backgroundColor:'#65378a'}}>Manger</Button>
        <Button 
         className='buttonFilter'
          onClick={() => {
            setDisplaySecondFilter6(true);
            setColorButton5(!colorButton5);
            setColorButton1(false);
            setColorButton2(false);
            setColorButton3(false);
            setColorButton4(false);
            setColorButton5(false);
            
          }}
          style={{backgroundColor:'#65378a'}}>Autre</Button>
      </div>
      <div class='inputRow'>
        {InputSubCat}
      </div>
      {buttonValidation}
    </div>


  );
}



function mapDispatchToProps(dispatch) {
  return {
    onSubCatSelected: function (subcat) {
      dispatch({ type: 'subCatFromFilter', subcat: subcat })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FilterScreen);