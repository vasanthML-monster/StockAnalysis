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


function GetAllStocknames(){
  let stockdata = document.getElementById('StockData');
  
  let allstocks = stockdata.querySelectorAll("tr td input[type='text']");
  
  let name 
  
  for (name of allstocks){
    
    GetApi(name.value)
    
  }  
  


}

function GetApi(stockname){

  let status = false
  let url = "https://api.allorigins.win/get?url=" + encodeURIComponent('https://in.finance.yahoo.com/quote/'+stockname+'/history?p='+stockname)
$.get(url,
function(data){
  Getdetails(data,stockname);
}
)


}

function Getdetails(data,stockname){
  let stockdata = document.getElementById('StockData');
  let content = []
  let contentstr = ""

  if(data["status"]["http_code"] != 200){
    $('#Apierror').html(`Error fetching details ${data["status"]["http_code"]}`)
  }else{
    content.push(data["contents"])
    
    contentstr = data["contents"]
    
    contentstr = contentstr.substring(contentstr.indexOf('<table'))
    contentstr = contentstr.substring(0,contentstr.indexOf('</table>'))
    
    let Name1 = document.createElement('div')
    Name1.innerHTML = stockname
   
    let allopenvals = []
    allopenvals.push(Name1)
    let count
    for (count of $(contentstr).find('tbody tr td:nth-child(2)')){
      allopenvals.push(count.outerText)
    }
    
    $('datadiv').text(allopenvals);
    console.log($(contentstr).find('tbody tr td:nth-child(2)'));
   

    

  }


}
