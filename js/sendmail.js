      // var clientId = '1027888377320-6bakjgqv5pm5s8c52h61tbhjfc16vlea.apps.googleusercontent.com';
      // var apiKey = 'AIzaSyC3P99eD3hCzLiuh3edhm-Poes6UX_H3oo';
      // var scopes =
      // 'https://www.googleapis.com/auth/gmail.readonly '+
      // 'https://www.googleapis.com/auth/gmail.send';
      
      var clientId = '1027888377320-vg62s0p2c3td90irqrf7cn302s9bspat.apps.googleusercontent.com';
      var apiKey = 'AIzaSyDHTyV0LHQhL_6TE13gVaNilGJEbafIGsA';
      var scopes =
      'https://www.googleapis.com/auth/gmail.readonly '+
      'https://www.googleapis.com/auth/gmail.send';

      function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth, 1);
      }

      function checkAuth() {
        gapi.auth.authorize({
          client_id: clientId,
          scope: scopes,
          immediate: true
        }, handleAuthResult);
      }

      function handleAuthClick() {
        gapi.auth.authorize({
          client_id: clientId,
          scope: scopes,
          immediate: false
        }, handleAuthResult);
        return false;
      }

      function handleAuthResult(authResult) {
        if(authResult && !authResult.error) {
          loadGmailApi();
          $('#authorize-button').remove();
          $('.table-inbox').removeClass("");
          $('#compose-button').removeClass("");
          $('#send-button').prop('disabled', false);
        } else {
          $('#authorize-button').removeClass("");
          $('#send-button').prop('disabled', true);
          $('#authorize-button').on('click', function(){
            handleAuthClick();
          });
        }
      }

      function loadGmailApi() {
        gapi.client.load('gmail', 'v1', displayInbox);
      }

      function displayInbox() {
        var request = gapi.client.gmail.users.messages.list({
          'userId': 'me',
          'labelIds': 'INBOX',
          'maxResults': 10
        });
        request.execute(function(response) {
          $.each(response.messages, function() {
            var messageRequest = gapi.client.gmail.users.messages.get({
              'userId': 'me',
              'id': this.id
            });
            messageRequest.execute(appendMessageRow);
          });
        });
      }

      function appendMessageRow(message) {
        $('.table-inbox tbody').append(
          '<tr>\
            <td>'+getHeader(message.payload.headers, 'From')+'</td>\
            <td>\
              <a href="#message-modal-' + message.id +
                '" data-toggle="modal" id="message-link-' + message.id+'">' +
                getHeader(message.payload.headers, 'Subject') +
              '</a>\
            </td>\
            <td>'+getHeader(message.payload.headers, 'Date')+'</td>\
          </tr>'
        );
        var reply_to = (getHeader(message.payload.headers, 'Reply-to') !== '' ?
          getHeader(message.payload.headers, 'Reply-to') :
          getHeader(message.payload.headers, 'From')).replace(/\"/g, '&quot;');

        var reply_subject = 'Re: '+getHeader(message.payload.headers, 'Subject').replace(/\"/g, '&quot;');
        $('body').append(
          '<div class="modal fade" id="message-modal-' + message.id +
              '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
            <div class="modal-dialog modal-lg">\
              <div class="modal-content">\
                <div class="modal-header">\
                  <button type="button"\
                          class="close"\
                          data-dismiss="modal"\
                          aria-label="Close">\
                    <span aria-="true">&times;</span></button>\
                  <h4 class="modal-title" id="myModalLabel">' +
                    getHeader(message.payload.headers, 'Subject') +
                  '</h4>\
                </div>\
                <div class="modal-body">\
                  <iframe id="message-iframe-'+message.id+'" srcdoc="<p>Loading...</p>">\
                  </iframe>\
                </div>\
                <div class="modal-footer">\
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                  <button type="button" class="btn btn-primary reply-button" data-dismiss="modal" data-toggle="modal" data-target="#reply-modal"\
                  onclick="fillInReply(\
                    \''+reply_to+'\', \
                    \''+reply_subject+'\', \
                    \''+getHeader(message.payload.headers, 'Message-ID')+'\'\
                    );"\
                  >Reply</button>\
                </div>\
              </div>\
            </div>\
          </div>'        );
        $('#message-link-'+message.id).on('click', function(){
          var ifrm = $('#message-iframe-'+message.id)[0].contentWindow.document;
          $('body', ifrm).html(getBody(message.payload));
        });
      }

      var userdata = [];     

      function composeTidys()
      { 
        var username = $('#username').val();
        var usermailid = $('#usermailid').val();
        var usercontactno = $('#usercontactno').val();
        var userquery = $('#userquery').val();

        userdata.push(username);
        userdata.push(usermailid);
        userdata.push(usercontactno);
        userdata.push(userquery);

        console.log(userdata); 
        console.log(typeof(userdata));

        sendEmail(userdata);

        $('#send-button').removeClass('disabled');
      } 

      function sendEmail(maildata){

        console.log("mail data ==>"+maildata);
        //var x=JSON.stringify(maildata);

        var str = "";
        str+="Name          : " + maildata[0] + "\n";
        str+="MailId        : " + maildata[1] + "\n"; 
        str+="ContactNumber : " + maildata[2] + "\n";
        str+="Query         : " + maildata[3] + "\n\n\n\n";
        str+="Thanks,\n";
        str+=maildata[0];

        $('#send-button').addClass('disabled');

        var mailId = "info1@ubora.co.ke";

        sendMessage(
          {
            'To': mailId,
            'Subject': "Enquiry Request"
          }, 
          str,
          successmail()          
        );

        return false;
      }

      function successmail(){
        alert("Mail Sent Successfully.");
        return false;
      }

      function sendReply()
      {
        $('#reply-button').addClass('disabled');

        sendMessage(
          {
            'To': $('#reply-to').val(),
            'Subject': $('#reply-subject').val(),
            'In-Reply-To': $('#reply-message-id').val()
          },
          $('#reply-message').val(),
          replyTidy
        );

        return false;
      }

      function replyTidy()
      {
        $('#reply-modal').modal('hide');

        $('#reply-message').val('');

        $('#reply-button').removeClass('disabled');
      }

      function fillInReply(to, subject, message_id)
      {
        $('#reply-to').val(to);
        $('#reply-subject').val(subject);
        $('#reply-message-id').val(message_id);
      }

      function sendMessage(headers_obj, message, callback)
      {
        var email = '';

        for(var header in headers_obj)
          email += header += ": "+headers_obj[header]+"\r\n";

        email += "\r\n" + message;

        var sendRequest = gapi.client.gmail.users.messages.send({
          'userId': 'me',
          'resource': {
            'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
          }
        });

        return sendRequest.execute(callback);
      }

      function getHeader(headers, index) {
        var header = '';
        $.each(headers, function(){
          if(this.name.toLowerCase() === index.toLowerCase()){
            header = this.value;
          }
        });
        return header;
      }

      function getBody(message) {
        var encodedBody = '';
        if(typeof message.parts === 'undefined')
        {
          encodedBody = message.body.data;
        }
        else
        {
          encodedBody = getHTMLPart(message.parts);
        }
        encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
        return decodeURIComponent(escape(window.atob(encodedBody)));
      }

      function getHTMLPart(arr) {
        for(var x = 0; x <= arr.length; x++)
        {
          if(typeof arr[x].parts === 'undefined')
          {
            if(arr[x].mimeType === 'text/html')
            {
              return arr[x].body.data;
            }
          }
          else
          {
            return getHTMLPart(arr[x].parts);
          }
        }
        return '';
      }