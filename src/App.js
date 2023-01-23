import React,{useState} from 'react';

function App() {
  const [peopleNum,setPeopleNum] = useState(0);
  const [pieces,setPieces] = useState(0);

  const [list,setLIst] = useState([]);

  const calValue = () => {
    let Number = parseInt(peopleNum);
    let slices = parseInt(pieces);

    const pricesName = [];

    let totalNumOfslices = Number * slices //total number of slices
    
    if(totalNumOfslices <= 4){
      pricesName.push({name:'5 inch',price :3});
     
    } else if(totalNumOfslices > 4 && totalNumOfslices < 6){
      pricesName.push({name:'7 inch',price :5});
      
    } else if(totalNumOfslices > 6 && totalNumOfslices < 10){
      pricesName.push({name:'10 inch',price :8});
     
    } else if(totalNumOfslices > 10 && totalNumOfslices < 15){
      pricesName.push({name:'15 inch',price :12});
      
    } else if(totalNumOfslices > 15 && totalNumOfslices < 24){
      pricesName.push({name:'24 inch',price :18});
    
    } else {
      let remainder = totalNumOfslices % 24
      if(remainder < 4){
        pricesName.push({name:'5 inch',price :3},{name:'24 inch',price :18});
      } else if(remainder > 4 && remainder < 6){
        pricesName.push({name:'7 inch',price :5},{name:'24 inch',price :18});
      } else if(remainder > 6 && remainder < 10){
        pricesName.push({name:'10 inch',price :8},{name:'24 inch',price :18});
      } else if(remainder > 10 && remainder < 15){
        pricesName.push({name:'15 inch',price :12},{name:'24 inch',price :18});
      } else if(remainder > 15 && remainder < 24){
        pricesName.push({name:'24 inch',price :18},{name:'24 inch',price :18});
      }
    }
    console.log(pricesName)

    setLIst(pricesName);
  }

  return (
    <div style={{textAlign: 'center'}}><br/>
      
      <label>
        The Number Of People:
        <input type="number" name="name" onChange={(e) => {setPeopleNum(e.target.value)}}/>
      </label><br/><br/>
      <label>
        How Many Pieces:
        <input type="number" name="name" onChange={(e) => {setPieces(e.target.value)}}/>
      </label><br/><br/>
      
      <input type="submit" value="Submit" onClick={calValue}/>
      {
        list?.map(item => {
          <li>pizza : {item.name}_____ prices : {item.price}</li>
        })
      }

    </div>
  );
}

export default App;
