/*#############################
// ar3-12-weeks-counter-mobile-EN.js  #
#############################*/
/*--------------------------
https://arza-3d.github.io/ar3.js/

<script src="https://raw.githack.com/Arza-3d/ar3.js/master/modular/12-counter/ar3-12-weeks-counter-mobile-EN.js"></script>
--------------------------*/

{/*
  let constructNote = 'ar3-12-weeks-counter-1_done';
  let isConstructed = $('body').hasClass(constructNote);*/

  // set date default to today

  //$('#start-date-12weeksyear-r3').val(new Date().toDateInputValue());
  //$('#start-date-12weeksyear-r3').val(new Date.now());
  var date = Date();
   $("#start-date-12weeksyear-r3").attr("placeholder", 1);


  function show12WeeksYearTime() {

      let $target12 = $('.twelve-weeks-r3'); // class name to set

      for (let h = 0; h < $target12.length; h++) {
        let date0 = $($target12[h]).attr('data-start-date-r3');

        function countDate(dayAddition = 1, startDate = date0) {
          let dateStart = new Date(startDate);
          let dateEnd = dateStart.setDate(dateStart.getDate() + dayAddition);
          dateEnd = new Date(dateEnd);
          return dateEnd;
        }
        let dateLine = countDate(7*12);

        $($target12[h]).append(
          '<table class="blank-2-r3">\n' +
            ' <tbody class="r3-build-box-here">\n' +
            ' </tbody>\n' +
          '</table>'
        );

        let dayCount = Math.ceil((Date.now() - new Date(date0))/(1000*60*60*24));
        // 1. make 7 X 12 small boxes that represent days
        let $boxTarget = $($target12[h]).find('.r3-build-box-here');
        {
          for (let i = 0; i < 7; i++) {
            $boxTarget.append('<tr>');
          }

          for (let i = 0; i < (7*12); i++) {
            let lineCount = i % 7;
            $theTarget = $boxTarget.find('tr:nth-of-type(' + (lineCount + 1) + ')');

            let theDate = countDate(i);

            let boxColor = '';
            let dayDifference = Date.now() - theDate;

            if (dayDifference < 0) {
              boxColor = '';
            } else {
              if (dayDifference < (24*60*60*1000)) {
                boxColor = 'style="background-color: yellow;"';
              } else {
                boxColor = 'style="background-color: #f44336;"';
              }
            }

            /*
            let daylyProgressReportAddress;
            if (i < dayCount) {
              daylyProgressReportAddress = 'href="https://raw.githack.com/Arza-3d/docs/master/12_weeks_year/'+date0+
                '/week_'+ Math.ceil((i + 1)/7) +'-day_'+ (i % 7 + 1) +'.html"';
            } else {
              daylyProgressReportAddress = 'href="#"';
            }
            */
            $theTarget.append(
              '<td>\n'+
              //' <a '+ daylyProgressReportAddress +'>\n'+
              '   <div class="r3-box" '+ boxColor +' title="'+ theDate.toDateString() +'">\n'+
              '   </div>\n'+
              //' </a>' +
              '</td>'
            );
          }

        }

        // 2. show starting day date
        $($target12[h]).prepend(
          '<h1>'+ $($target12[h]).attr('data-12weeks-owner-r3') +'</h1>' +
          '<div style="font-size:12px">started at <b>'+ new Date(date0).toDateString() +'</b></div>\n'
        );

        // 3. show dateline and time left
        {
          let timeInHourBeforeDeadline = (dateLine - Date.now())/(1000*60*60*(24/(24-8-8)));
          let wakeHoursBeforeDeadline = Math.floor(timeInHourBeforeDeadline);
          let wakeHoursToMinutes = Math.round((timeInHourBeforeDeadline - wakeHoursBeforeDeadline)*60);

          // time lost counter
          let timeLost = Date.now() - new Date(date0);
          let hourLost = Math.round(timeLost / (1000*3600));

          $($target12[h]).append(

            '<div style="font-size:12px">\n'+
              'THE DATELINE is <b>'+ dateLine.toDateString() +'</b>!! <big>😠</big>\n'+
            '</div>\n'+
            '<div style="font-size:12px;">\n'+
              '<br>TIME LEFT IS <b style="color:#e34336; background-color: black; padding: 4px; border-radius: 8px"><big><big>' +
              wakeHoursBeforeDeadline + ' HOURS ' +
              wakeHoursToMinutes + ' MINUTES </big></big></b>'+
              '!!!<big><big>😠</big></big><br>\n'+
              '<br>Time lost <big style="color:#e34336;  background-color: black; padding: 4px; border-radius: 8px""><b>' + hourLost +' hours </b></big> !!!\n' +
            '</div>\n'
          );
        }
      }
      // emptying
      //$target12.html('');// = '';








  }
  show12WeeksYearTime();
  $('head').append(
    '<style>' +

      'table.blank-2-r3 td{\n'+
        'padding: 6px;\n'+
      '}\n'+

      '.r3-build-box-here .r3-box {\n'+
        ' height: 14px;\n'+
        ' width: 14px;\n'+
        ' background-color: #7bc96f;\n'+
        ' cursor: pointer;\n'+
        ' border: grey thin solid \n'+
      '}\n' +
    '</style>'
  );



  /*
  $('body').addClass(constructNote);
  */
}
