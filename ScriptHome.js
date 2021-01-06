var APIcontent = ""

function Addstock(){
  let stockdata = document.getElementById('StockData');

  let tr = document.createElement('tr')
  let td = document.createElement('td')
  let td1 = document.createElement('td')

  let noOfelements = (stockdata.querySelectorAll("tr")).length
  td.innerHTML = "Stock name"
  td1.innerHTML = "<input type='text' name='stockName"+ noOfelements + "'>"
  tr.appendChild(td)
  tr.appendChild(td1)
  stockdata.appendChild(tr)

}




function GetApi(){

  let status = false
  let url = "https://api.allorigins.win/get?url=" + encodeURIComponent('https://in.finance.yahoo.com/quote/INFY/history?p=INFY')
$.get(url,
function(data){
  Getdetails(data);
}
)


}

function Getdetails(data){
  let stockdata = document.getElementById('StockData');
  let content = ""

  if(data["status"]["http_code"] != 200){
    $('#Apierror').html(`Error fetching details ${data["status"]["http_code"]}`)
  }else{
    content = data["contents"]

  }


}
