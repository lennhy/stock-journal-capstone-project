import "./block.css";

const Block = ({stock}) => {
    // console.log("hello")
    // // console.log(stock)
    // let tickers=[]
    
    // const calculateTotalForday = (stock)=>{
    //     stock.forEach(s => {
    //         if(!tickers.includes(s.SYMBOL)){
    //             tickers.push(s.SYMBOL)
    //         } 
    //     });
    //     console.log(tickers)
    //     // return stock;
    // }
    //     calculateTotalForday(stock)

    return (
        <div className="block">
           {/* {stock.map((s)=> {
        return <div>{s.SYMBOL}</div> 
      })} */}

         </div>
    );
};

export default Block;
