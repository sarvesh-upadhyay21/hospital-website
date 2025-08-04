//Defines ucfirst function
function ucfirst(str) {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}

//Whoswho category filter
jQuery(document).ready(function(){
  jQuery(document).on("click",'.ww_cat_filter, .cdir_next, .cdir_prev',function(e){
            e.preventDefault();
            var data = jQuery(this).attr('data');
            var page = jQuery(this).parent().siblings('.count').find('span').html();
            var cat_slug = jQuery('#divisions').val();
            if(cat_slug=='-1'){
              location.reload();
            }
            var data_nonce = jQuery('.ww_html').data( "nonce" );
            var data_profile = jQuery('.ww_html').data( "profile" );
            var data_filter = jQuery('.ww_html').data( "filter" );
            jQuery.ajax({
              type: "post",
              //dataType: "json",
              url: ajaxurl,
              data: {
                action: "ww_filter",
                term_slug: cat_slug,
                filter: data_filter,
                profile_image: data_profile,
                paged:page,
                type:data,
                security:data_nonce,
              },
              success: function (response) {
                var d = jQuery.parseJSON(response);
                var data = d.result;
                var html ='<table><caption><h2 class="heading4">'+jQuery('#divisions option:selected').html()+'</h2></caption><thead>';
                html +='<tr>';
                for(var i in data){
                    var key = i;
                    var val = data[i];
                }
                for(var k in val){
                html +='<th scope="col">'+k+'</th>';
                }
                 html +='</tr>';
                html +='</thead><tbody>';
                jQuery.each(data, function (i) {
                    html +='<tr>';
                    jQuery.each(data[i], function (key, val) {


                      html +='<td>'+val+'</td>';


                    });
                     html +='</tr>';
                  });
                html +='</tbody></table>';
                if(d.fp>d.ppp){
                html +='<div class="row">';
                html +='<div class="col-12">';
                html +='<div class="pegination" role="navigation" aria-label="'+'Pagination'+'">';
                html +='<ul>';
                if(d.first==1)
                {
                  html +='<li><a data="prev" class="cdir_prev" href="#">'+d.previous+'</a></li>';
                }else
                {}
                html +='<li class="count mr-top10 mr-left10 mr-right10"> '+d.page+' - <span class="cpaged">'+d.paged+'</span> '+d.of+' '+d.mp+' &nbsp;</li>';
                if(d.last==1)
                {}else
                {
                  html +='<li><a data="next" class="cdir_next" href="#">'+d.next+'</a></li>';
                }
                html +='</ul>';
                html +='</div>';
                html +='</div>';
                html +='</div>';
                }
                if(jQuery.isEmptyObject(data)){
                  jQuery('.ww_html').html("<p>No data found!</p>");
                }else{

                jQuery('.ww_html').html(html);
              }
                  jQuery('body').trigger('targetExternalLinks');
                  jQuery('table').each(function() {
                      if((jQuery(this).find('th').length > 0) || jQuery(this).find('thead').length > 0){
                          jQuery(this).basictable({  breakpoint: 991, forceResponsive: true});
                      }else{
                          jQuery(this).wrap("<div class='tableWrapperResponsive' style='width:100%; overflow-x:scroll'>  </div>")
                      }
                  });
              }
            });

          });
        });

//Directory category filter
jQuery(document).ready(function(){
          jQuery(document).on("click",'.dir_cat_filter, .cdir_next, .cdir_prev',function(e){
            e.preventDefault();
            var data = jQuery(this).attr('data');
            var page = jQuery(this).parent().siblings('.count').find('span').html();
            var cat_slug = jQuery('#department').val();
            if(cat_slug=='-1'){
              location.reload();
            }
            var data_nonce = jQuery('.ww_html').data( "nonce" );
            var data_profile = jQuery('.dir_html').data( "profile" );
            var data_filter = jQuery('.dir_html').data( "filter" );
            jQuery.ajax({
              type: "post",
              //dataType: "json",
              url: ajaxurl,
              data: {
                action: "dir_filter",
                term_slug: cat_slug,
                filter: data_filter,
                profile_image: data_profile,
                paged:page,
                type:data,
                security:data_nonce
              },
              success: function (response) {
                var d = jQuery.parseJSON(response);
                var data = d.result;
                var html ='<table><caption><h2 class="heading4">'+jQuery('#department option:selected').html()+'</h2></caption><thead>';
                html +='<tr>';
                for(var i in data){
                    var key = i;
                    var val = data[i];
                }
                for(var k in val){

                html +='<th scope="col">'+k+'</th>';
                }
                 html +='</tr>';
                html +='</thead><tbody>';

                jQuery.each(data, function (i) {
                    html +='<tr>';
                    jQuery.each(data[i], function (key, val) {


                      html +='<td>'+val+'</td>';


                    });
                    });
                html +='</tbody></table>';
                if(d.fp>d.ppp){
                html +='<div class="row">';
                html +='<div class="col-12">';
                html +='<div class="pegination" role="navigation" aria-label="'+'Pagination'+'">';
                html +='<ul>';
                if(d.first==1)
                {
                  html +='<li><a data="prev" class="cdir_prev" href="#">'+d.previous+'</a></li>';
                }else
                {}
                html +='<li class="count mr-top10 mr-left10 mr-right10"> '+d.page+' - <span class="cpaged">'+d.paged+'</span> '+d.of+' '+d.mp+' </li>';
                if(d.last==1)
                {}else
                {
                  html +='<li><a data="next" class="cdir_next" href="#">'+d.next+'</a></li>';
                }
                html +='</ul>';
                html +='</div>';
                html +='</div>';
                html +='</div>';
                }
                if(jQuery.isEmptyObject(data)){
                  jQuery('.dir_html').html("<p>No data found!</p>");
                }else{
                jQuery('.dir_html').html(html);
              }
                  jQuery('body').trigger('targetExternalLinks');
                  jQuery('table').each(function() {
                      if((jQuery(this).find('th').length > 0) || jQuery(this).find('thead').length > 0){
                          jQuery(this).basictable({  breakpoint: 991, forceResponsive: true});
                      }else{
                          jQuery(this).wrap("<div class='tableWrapperResponsive' style='width:100%; overflow-x:scroll'>  </div>")
                      }
                  });
              }
            });

          });
        });

//Who's Who pagination
jQuery(document).ready(function(){
jQuery("body").find('.ww_nxt, .ww_prv').click(function(e){
  e.preventDefault();
  var data = jQuery(this).attr('data');
  var btn = jQuery(this);
  var page = jQuery(this).parent().siblings('.count').find('span').html();
  var slug = jQuery(this).parents('.whoswho').attr('data');
  var name = jQuery(this).parents('.whoswho').data('name');
  var data_nonce = jQuery('.ww_html').data( "nonce" );
  var data_profile = jQuery('.ww_html').data( "profile" );
  var data_filter = jQuery('.ww_html').data( "filter" );
  jQuery.ajax({
    method: "POST",
    url: ajaxurl,
    data: { action:"ww_pages", paged:page, tax_slug:slug, type:data, profile_image:data_profile, filter:data_filter, security:data_nonce }
  })
  .done(function( response ) {
    var obj = JSON.parse(response);
    var data = obj.html;
    var caption='';
                if(name!='uncategorized'){
                  caption = '<caption><h2 class="heading4">'+name+'</h2></caption>';
                }
                var html ='<table>'+caption+'<thead>';
                html +='<tr>';
                for(var i in data){
                    var key = i;
                    var val = data[i];
                }
                for(var k in val){
                html +='<th scope="col">'+k+'</th>';
                }
                 html +='</tr>';
                html +='</thead><tbody>';

               jQuery.each(data, function (i) {

                    html +='<tr>';
                    jQuery.each(data[i], function (key, val) {

                      html +='<td>'+val+'</td>';


                    });
                     html +='</tr>';
                  });
                html +='</tbody></table>';
                if(jQuery.isEmptyObject(data)){
                  jQuery("div[data='"+slug+"']").find('div.tb_content').html("<p>No data found!</p>");
                }else{
                jQuery("div[data='"+slug+"']").find('div.tb_content').html(html);
                    jQuery('body').trigger('targetExternalLinks');
                    jQuery('table').each(function() {
                        if((jQuery(this).find('th').length > 0) || jQuery(this).find('thead').length > 0){
                            jQuery(this).basictable({  breakpoint: 991, forceResponsive: true});
                        }else{
                            jQuery(this).wrap("<div class='tableWrapperResponsive' style='width:100%; overflow-x:scroll'>  </div>")
                        }
                    });
              }
    jQuery("div[data='"+slug+"']").find(".paged").html(obj.paged);
    if(obj.last==1)
    {
      jQuery("div[data='"+slug+"']").find(".ww_nxt").hide();
    }else
    {
      jQuery("div[data='"+slug+"']").find(".ww_nxt").show();
    }
    if(obj.first==1)
    {
      jQuery("div[data='"+slug+"']").find(".ww_prv").show();
    }else
    {
      jQuery("div[data='"+slug+"']").find(".ww_prv").hide();
    }

  });

});
});

//Directory pagination
jQuery(document).ready(function(){
jQuery("body").find('.dir_nxt, .dir_prv').click(function(e){
  e.preventDefault();
  var data = jQuery(this).attr('data');
  var btn = jQuery(this);
  var page = jQuery(this).parent().siblings('.count').find('span').html();
  var slug = jQuery(this).parents('.directory').attr('data');
  var name = jQuery(this).parents('.directory').data('name');
  var data_nonce = jQuery('.ww_html').data( "nonce" );
  var data_profile = jQuery('.dir_html').data( "profile" );
  var data_filter = jQuery('.dir_html').data( "filter" );
  jQuery.ajax({
    method: "POST",
    url: ajaxurl,
    data: { action:"dir_pages", paged:page, tax_slug:slug, type:data, profile_image:data_profile, filter:data_filter, security: data_nonce }
  })
  .done(function( response ) {

    var obj = JSON.parse(response);
    var data = obj.html;
                var html ='<table><caption><h2 class="heading4">'+name+'</h2></caption><thead>';
                html +='<tr>';
                for(var i in data){
                    var key = i;
                    var val = data[i];
                }
                for(var k in val){

                html +='<th scope="col">'+k+'</th>';
                }
                 html +='</tr>';
                html +='</thead><tbody>';

                jQuery.each(data, function (i) {
                    html +='<tr>';
                    jQuery.each(data[i], function (key, val) {


                      html +='<td>'+val+'</td>';


                    });
                    });
                html +='</tbody></table>';
                if(jQuery.isEmptyObject(data)){
                  jQuery("div[data='"+slug+"']").find('div.tb_content').html("<p>No data found!</p>");
                }else{
                jQuery("div[data='"+slug+"']").find('div.tb_content').html(html);
                    jQuery('body').trigger('targetExternalLinks');
                    jQuery('table').each(function() {
                        if((jQuery(this).find('th').length > 0) || jQuery(this).find('thead').length > 0){
                            jQuery(this).basictable({  breakpoint: 991, forceResponsive: true});
                        }else{
                            jQuery(this).wrap("<div class='tableWrapperResponsive' style='width:100%; overflow-x:scroll'>  </div>")
                        }
                    });
              }
    jQuery("div[data='"+slug+"']").find(".paged").html(obj.paged);
    if(obj.last==1)
    {
      jQuery("div[data='"+slug+"']").find(".dir_nxt").hide();
    }else
    {
      jQuery("div[data='"+slug+"']").find(".dir_nxt").show();
    }
    if(obj.first==1)
    {
      jQuery("div[data='"+slug+"']").find(".dir_prv").show();
    }else
    {
      jQuery("div[data='"+slug+"']").find(".dir_prv").hide();
    }

  });
});
});


//DM Profile pagination
jQuery(document).ready(function(){
    jQuery("body").on('click','.dm_profile_prv, .dm_profile_nxt', function(e){
        e.preventDefault();
        var navigationType = jQuery(this).attr('data-navigationType');
        var page = jQuery(this).parent().siblings('.count').attr('data-count');
        var data_nonce = jQuery('.dm_profile_html').data( "nonce" );
        var data_profile = jQuery('.dm_profile_html').data( "profile" );
        var data_filter = jQuery('.dm_profile_html').data( "filter" );
        jQuery.ajax({
            method: "POST",
            url: ajaxurl,
            data: { action:"dm_profile_pages", paged:page,  type:navigationType, profile_image:data_profile, filter:data_filter, security: data_nonce }
        })
            .done(function( response ) {

                jQuery(".dm_profile_html .dm-profiles").find('div.tb_content').html(response);
                jQuery('body').trigger('targetExternalLinks');
                jQuery('table').each(function() {
                    if((jQuery(this).find('th').length > 0) || jQuery(this).find('thead').length > 0){
                        jQuery(this).basictable({  breakpoint: 991, forceResponsive: true});
                    }else{
                        jQuery(this).wrap("<div class='tableWrapperResponsive' style='width:100%; overflow-x:scroll'>  </div>")
                    }
                });
            });
    });
});