$(document).ready(function() {

	$('select.mydrop').change(function(){
		$('.searchedresult').hide();
	});

	$('.has-spinner').click(function(e) {
		e.preventDefault();

		$('.searchedresult').hide();

		var country = $("#country").val();
		// var technology = $("#technology").val();
		// var partnername = $("#partnername").val();
		// console.log(country + " and " + technology + " and " + partnername );
		console.log(country);


		var kstr = "";
		kstr+='<div id="searchedresult">';
		kstr+='<div class="row" style="margin-bottom: 0px !important;">';
		kstr+='<div class="col-md-8 col-sm-12">';
		kstr+='<div class="companyaddress">';
		kstr+='<h4>Searched Results..</h4>';
		kstr+='<h5>Eutelsat</h5>';
		kstr+='<h5>70 Rue Balard, 75015 Paris, France</h5>';
		kstr+='<p><b>Tel</b>: +33 1 53 98 47 47</p>'; 
		kstr+='<a href="" class="companydetsilbtn" title="Eutelsat" data-toggle="modal" data-target="#myModaleutelsat" target="_self"><i class="fa fa-long-arrow-right"></i>Company Details</a>';
		kstr+='</div>';
		kstr+='</div>';
		kstr+='<div class="col-md-4 col-sm-12">';
		kstr+='<div class="compantdetail-logo">';
		kstr+='<img src="images/eutelsat-logo.png"  alt="company-logo">';
		kstr+='<a href="https://www.eutelsat.com/en/home.html" target="_blank" title="Go to Company Website"><i class="fa fa-external-link" aria-hidden="true"></i>Visit Company Website</a>';
		kstr+='</div>';
		kstr+='</div>';
		kstr+='</div>';
		kstr+='</div>';

		var istr = "";
		istr+='<div id="searchedresult">';
		istr+='<div class="row" style="margin-bottom: 0px !important;margin-top: 10px !important;">';
		istr+='<div class="col-md-8 col-sm-12">';
		istr+='<div class="companyaddress">';
		istr+='<h4>Searched Results..</h4>';
		istr+='<h5>Microsoft Corporation</h5>';
		istr+='<h5>ISB Road, Nanakrmaguda, Gachibowli, Hyderabad, Telangana 500032</h5>';
		istr+='<p><b>Tel</b>: 040 2300 7204</p>'; 
		istr+='<a href="" class="companydetsilbtn" title="Microsoft Corporation" data-toggle="modal" data-target="#myModalmicro" target="_self"><i class="fa fa-long-arrow-right"></i>Company Details</a>';
		istr+='</div>';
		istr+='</div>';
		istr+='<div class="col-md-4 col-sm-12">';
		istr+='<div class="compantdetail-logo">';
		istr+='<img src="images/microsoft-logo.png"  alt="company-logo">';
		istr+='<a href="https://www.microsoft.com/en-in" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i>Visit Company Website</a>';
		istr+='</div>';
		istr+='</div>';
		istr+='</div>';
		istr+='<div class="row" style="margin-bottom: 0px !important;margin-top: 10px !important;">';
		istr+='<div class="col-md-8 col-sm-12">';
		istr+='<div class="companyaddress">';
		istr+='<h5>HoduSoft Pvt Ltd</h5>';
		istr+='<h5>201, Sarthik 2, Opp Rajpath Club, Bodakdev, Ahmedabad, Gujarat 380054</h5>';
		istr+='<p><b>Tel</b>: 079 4893 9393</p>'; 
		istr+='<a href="" class="companydetsilbtn" title="HoduSoft" data-toggle="modal" data-target="#myModalhodusoft" target="_self"><i class="fa fa-long-arrow-right"></i>Company Details</a>';
		istr+='</div>';
		istr+='</div>';
		istr+='<div class="col-md-4 col-sm-12">';
		istr+='<div class="compantdetail-logo" style="margin-top: 0px !important;">';
		istr+='<img src="images/hodusoft-logo.jpg"  alt="company-logo">';
		istr+='<a href="http://hodusoft.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i>Visit Company Website</a>';
		istr+='</div>';
		istr+='</div>';
		istr+='</div>';
		istr+='</div>';

		var eastr = "";
		eastr+='<div id="searchedresult">';
		eastr+='<div class="row" style="margin-bottom: 0px !important;margin-top: 10px !important;">';
		eastr+='<div class="col-md-8 col-sm-12">';
		eastr+='<div class="companyaddress">';
		eastr+='<h4>Searched Results..</h4>';
		eastr+='<h5>Wireless Excellence Limited</h5>';
		eastr+='<h5>G6, Magdalen Centre, Oxford OX4 4GA, United Kingdom</h5>';
		eastr+='<p><b>Tel</b>: +44 870 495 9169</p>'; 
		eastr+='<a href="" class="companydetsilbtn" title="CableFree" data-toggle="modal" data-target="#myModalcablefree" target="_self"><i class="fa fa-long-arrow-right"></i>Company Details</a>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='<div class="col-md-4 col-sm-12">';
		eastr+='<div class="compantdetail-logo">';
		eastr+='<img src="images/cablefree-logo.png"  alt="company-logo">';
		eastr+='<a href="http://www.cablefree.net/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i>Visit Company Website</a>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='<span class="clear"></span>'; 
		eastr+='<div class="row" style="margin-bottom: 0px !important;margin-top: 10px !important;">';
		eastr+='<div class="col-md-8 col-sm-12">';
		eastr+='<div class="companyaddress">'; 
		eastr+='<h5>Allot Communications</h5>';
		eastr+='<h5>Africa</h5>';
		eastr+='<p><b>Tel</b>: +2-783-335-6641</p>'; 
		eastr+='<a href="" class="companydetsilbtn" title="Allot" data-toggle="modal" data-target="#myModalallot" target="_self"><i class="fa fa-long-arrow-right"></i>Company Details</a>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='<div class="col-md-4 col-sm-12">';
		eastr+='<div class="compantdetail-logo" style="margin-top: 0px !important;">';
		eastr+='<img src="images/allot-logo.png"  alt="company-logo">';
		eastr+='<a href="https://www.allot.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i>Visit Company Website</a>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='<span class="clear"></span>';
		eastr+='<div class="row" style="margin-bottom: 0px !important;margin-top: 10px !important;">';
		eastr+='<div class="col-md-8 col-sm-12">';
		eastr+='<div class="companyaddress">'; 
		eastr+='<h5>HotSpot Network Manager</h5>';
		eastr+='<h5>Via Roma 61, Fonte (TV), Italy</h5>';
		eastr+='<p><b>Tel</b>: (+39) 0423 9292</p>'; 
		eastr+='<a href="" class="companydetsilbtn" title="HS Network Manager" data-toggle="modal" data-target="#myModalhsnm" target="_self"><i class="fa fa-long-arrow-right"></i>Company Details</a>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='<div class="col-md-4 col-sm-12">';
		eastr+='<div class="compantdetail-logo" style="margin-top: 0px !important;">';
		eastr+='<img src="images/hsnm-logo.png"  alt="company-logo">';
		eastr+='<a href="http://www.hsnetworkmanager.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i>Visit Company Website</a>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='</div>';
		eastr+='</div>';

		var ostr = "";
		ostr+= '<div id="searchedresult">';
		ostr+="<p>No Search Results..</p>";
		ostr+= '</div>';

		var btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
		
		if(country == -1) 
		{
			alert("Country Is Mandatory.."); 
		} 
		else if(country == "Kenya") 
		{
			$("#searchedresultkenya").find('#searchedresult:first-child').remove();	
			$(".searchedresultkenya").append(kstr).show(); 
		}
		else if(country == "India") 
		{ 
			$("#searchedresultindia").find('#searchedresult:first-child').remove(); 	
			$(".searchedresultindia").append(istr).show(); 
		} 
		else if(country == "East Africa") 
		{ 	
			$("#searchedresulteafrica").find('#searchedresult:first-child').remove(); 
			$(".searchedresulteafrica").append(eastr).show();
		} 
		else 
		{ 	
			$("#searchedresultnodata").find('#searchedresult:first-child').remove();	
			$(".searchedresultnodata").append(ostr).show(); 
		}
            $(btn).buttonLoader('stop');
        }, 2000);
	});  

	$("#vmslink").on("click", function(e){
		e.preventDefault();
		$("#solutioncontent").load("vms.html");
	});

});  