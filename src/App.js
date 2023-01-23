import React,{useState} from 'react';

function App() {
  const [peopleNum,setPeopleNum] = useState(0);
  const [pieces,setPieces] = useState(0);

  const calValue = () => {
    let Number = parseInt(peopleNum);
    let slices = parseInt(pieces);

    const pricesName = [];

    let totalNumOfslices = Number * slices //total number of slices

    if(totalNumOfslices <= 4){
      pricesName.push('5 inch',3);
     
    } else if(totalNumOfslices > 4 && totalNumOfslices < 6){
      pricesName.push('7 inch',5);
      
    } else if(totalNumOfslices > 6 && totalNumOfslices < 10){
      pricesName.push('10 inch',8);
     
    } else if(totalNumOfslices > 10 && totalNumOfslices < 15){
      pricesName.push('15 inch',12);
      
    } else if(totalNumOfslices > 15 && totalNumOfslices < 24){
      pricesName.push('24 inch',18);
    
    } else {
      //if(totalNumOfslices % 24 > 1)
    }
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

    </div>
  );
}

export default App;
