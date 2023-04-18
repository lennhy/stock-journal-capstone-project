import { useEffect, useState } from "react";
import axios from "axios";
import Block from "./Block";

const Calendar = () => {
  // It will be a lot more dificult to calculate swing trades -

  // For now only track day trades Or you will have to also keep track of the
  // date you sold all the stock after purchasing it over a period of time

  // Calculate P and L for the day

  // Check if there is an equal amount of share buys and share sells for the same symbol

  // for that day if not then do not calculate total p and l for that stock for that day.
  // Record the

  // If there is an equal amount of share buy and share sells for that day then calculate the total pand l for that stock for that day

  const [stockData, setStockData] = useState([]);
  // start with the first object date use that for reference and use the same date to check if it matches that object
  // if it does then return in reduce at the end the reduce methdo will return an array
  // Get all the stocks with the same date and save them to an array

  axios.get("http://localhost:8080/").then((response) => {
    // console.log(response.data)
    let data = response.data
  
    let groupedData = []
    let obj = {}

    data.forEach(stock => {
      // if the object does not have a value
      if(!obj[stock.DATE]){
        // Then give it a value of an emtoy array
        obj[stock.DATE] = []
        // if the groupdata array does not include object then oush object inside
        if(!groupedData.includes(obj)){
          groupedData.push(obj)
        }
      }
      // if object has a value and includes the date then add the stock to it
      if(obj[stock.DATE] && (Object.keys(obj).includes(stock.DATE))){
         obj[stock.DATE].push(stock) // This will automatically update the same object instance in the groupedData array
      }
    });
    // console.log(typeof groupedData)

    // console.log(typeof groupedData[0])
    setStockData(groupedData[0])
    console.log(stockData)
  });

  // console.log(stock)
    // let tickers=[]
    // Need to get inside the date object and calcualte the totals for each symbol for that day using amount and reduce method
    // const calculateTotalForday = (stockData)=>{
    //   Object.keys(stockData).map((date)=> {
    //     (stockData[date]).forEach((s) => {
    //         if(!tickers.includes(s.SYMBOL)){
    //             tickers.push(s.SYMBOL)
    //         } 
    //     })
        //  tickers.forEach((t) => {
            // if(!tickers.includes(s.SYMBOL)){
            //     tickers.push(s.SYMBOL)
            // } 
        // })
        
        // stockData[date] = 
    //   })
    //   console.log(tickers)
    // }
    // calculateTotalForday(stockData)
  // let month = ()=>{
    
  // }
  // console.log(Object.keys(stockData))
  return (
    <div>
      {/* {Object.keys(stockData).map((date)=> {
        return <Block stock={stockData[date]} /> 
      })} */}
    </div>
  );
};

export default Calendar;
