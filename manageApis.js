<style>
    /* Center the loader */
    #loader {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      width: 150px;
      height: 150px;
      margin: -75px 0 0 -75px;
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }
    
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Add animation to "page content" */
    .animate-bottom {
      position: relative;
      -webkit-animation-name: animatebottom;
      -webkit-animation-duration: 1s;
      animation-name: animatebottom;
      animation-duration: 1s
    }
    
    @-webkit-keyframes animatebottom {
      from { bottom:-100px; opacity:0 } 
      to { bottom:0px; opacity:1 }
    }
    
    @keyframes animatebottom { 
      from{ bottom:-100px; opacity:0 } 
      to{ bottom:0; opacity:1 }
    }
    
    #myDiv {
      display: none;
      text-align: center;
    }
    .center {
      text-align: center;
      
    }  

    .button2 {
      background-color: #e7e7e7;
      color: black;
      border-radius: 10px;
      font-size: 17px;
      } 

    </style>


<head>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
</head>

<p id="updates">Press the button to start processing folder structure and export it to an excel sheet</p>
<h4>NOTES:</h4>
<ul>
  <li>The download will start automatically</li>
  <li>Page will be unresponsive while the widget works</li>
  <li>It might take a while depending on project size</li>
</ul>

<div id = "loader" style="display: none">

</div>

<div class = "center">
  <button id = "btn" class="button2">Start</button>
</div>




<script type="text/javascript" src="FileSaver.min.js"></script>
<script type="text/javascript" src="js-xlsx/xlsx.core.min.js"></script>
<script type="text/javascript" src="js-xlsx/exportToXlsxHelpers.js"></script>



<script>
if (typeof(w) == "undefined") {
  w = new Worker("manageApis.js");
}
</script>


