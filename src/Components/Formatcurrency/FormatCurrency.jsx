const Currency_Format=new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency",
});
const formatCurrency=(number)=>{
    return Currency_Format.format(number);

}
export default formatCurrency;
//بتعمل format للعمله بتاعتى 
