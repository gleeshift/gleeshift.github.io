// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

function submitJiraSearchForm() {
    var queryTemplate1 = '(summary ~ "%1" OR description ~ "%1" OR comment ~ "%1") AND ';
    var queryTemplate2 = 'project = CB AND resolution = Unresolved %2ORDER BY created';
    var componentKeywords = [
        /\b(ios|iphone|ipad|ipod)\b/ig, 'iOS',
        /\b(android)\b/ig, 'Android',
        /\b(blackberry|rim|bb.?|bb10|webworks)\b/ig, 'BlackBerry',
        /\b(webos)\b/ig, 'webOS',
        /\b(wp7|windows phone)\b/ig, 'WP7',
        /\b(wp8|windows phone)\b/ig, 'WP8'
        ];
    var query = document.getElementById('jira-search-box').value;
    // Check for some platform keywords:
    var components = [];
    for (var i = 0; i < componentKeywords.length; i += 2) {
        if (query.match(componentKeywords[i])) {
            query = query.replace(componentKeywords[i], '');
            components.push(componentKeywords[i + 1]);
        }
    }
    var componentsQuery = '';
    if (components.length) {
        // Add in components that apply to all platforms.
        components.push('Docs', 'mobile-spec', 'CordovaJS');
        componentsQuery = 'AND component in (' + components.join(', ') + ') ';
    }
    // Remove quotes since we are adding them in.
    query = query.replace(/"/g, '');
    var tokens = query.split(/\s+/);
    query = '';
    for (var i = 0; i < tokens.length; ++i) {
        if (tokens[i]) {
            query += queryTemplate1.replace(/%1/g, tokens[i]);
        }
    }
    query += queryTemplate2.replace('%2', componentsQuery)
    window.open('https://issues.apache.org/jira/secure/IssueNavigator.jspa?mode=show&reset=true&navType=simple&jqlQuery=' + encodeURIComponent(query), '_newtab' + new Date);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var lastVisit = getCookie("visitTime");
function checkNotification() {
    var dates = [];
    if (lastVisit != "") {
        
        dates.push('Fri, 18 Dec 2015 00:00:00 -0500');
        dates.push('Mon, 14 Dec 2015 00:00:00 -0500');
        dates.push('Tue, 08 Dec 2015 00:00:00 -0500');
        dates.push('Tue, 08 Dec 2015 00:00:00 -0500');
        dates.push('Tue, 24 Nov 2015 00:00:00 -0500');
        dates.push('Tue, 24 Nov 2015 00:00:00 -0500');
        dates.push('Fri, 20 Nov 2015 00:00:00 -0500');
        dates.push('Wed, 11 Nov 2015 00:00:00 -0500');
        dates.push('Mon, 09 Nov 2015 00:00:00 -0500');
        dates.push('Fri, 06 Nov 2015 00:00:00 -0500');
        dates.push('Mon, 02 Nov 2015 00:00:00 -0500');
        dates.push('Tue, 22 Sep 2015 00:00:00 -0400');
        dates.push('Mon, 21 Sep 2015 00:00:00 -0400');
        dates.push('Wed, 09 Sep 2015 00:00:00 -0400');
        dates.push('Tue, 08 Sep 2015 00:00:00 -0400');
        dates.push('Sat, 05 Sep 2015 00:00:00 -0400');
        dates.push('Tue, 18 Aug 2015 00:00:00 -0400');
        dates.push('Thu, 13 Aug 2015 00:00:00 -0400');
        dates.push('Tue, 04 Aug 2015 00:00:00 -0400');
        dates.push('Tue, 21 Jul 2015 00:00:00 -0400');
        dates.push('Mon, 22 Jun 2015 00:00:00 -0400');
        dates.push('Wed, 10 Jun 2015 00:00:00 -0400');
        dates.push('Thu, 04 Jun 2015 00:00:00 -0400');
        dates.push('Wed, 03 Jun 2015 00:00:00 -0400');
        dates.push('Tue, 26 May 2015 00:00:00 -0400');
        dates.push('Tue, 21 Apr 2015 00:00:00 -0400');
        dates.push('Tue, 21 Apr 2015 00:00:00 -0400');
        dates.push('Wed, 15 Apr 2015 00:00:00 -0400');
        dates.push('Mon, 02 Mar 2015 00:00:00 -0500');
        dates.push('Fri, 27 Feb 2015 00:00:00 -0500');
        dates.push('Wed, 25 Feb 2015 00:00:00 -0500');
        dates.push('Tue, 10 Feb 2015 00:00:00 -0500');
        dates.push('Fri, 06 Feb 2015 00:00:00 -0500');
        dates.push('Fri, 09 Jan 2015 00:00:00 -0500');
        dates.push('Tue, 09 Dec 2014 00:00:00 -0500');
        dates.push('Tue, 25 Nov 2014 00:00:00 -0500');
        dates.push('Tue, 18 Nov 2014 00:00:00 -0500');
        dates.push('Thu, 13 Nov 2014 00:00:00 -0500');
        dates.push('Tue, 11 Nov 2014 00:00:00 -0500');
        dates.push('Thu, 06 Nov 2014 00:00:00 -0500');
        dates.push('Thu, 06 Nov 2014 00:00:00 -0500');
        dates.push('Fri, 17 Oct 2014 00:00:00 -0400');
        dates.push('Thu, 16 Oct 2014 00:00:00 -0400');
        dates.push('Mon, 22 Sep 2014 00:00:00 -0400');
        dates.push('Mon, 08 Sep 2014 00:00:00 -0400');
        dates.push('Wed, 13 Aug 2014 00:00:00 -0400');
        dates.push('Mon, 11 Aug 2014 00:00:00 -0400');
        dates.push('Wed, 06 Aug 2014 00:00:00 -0400');
        dates.push('Mon, 04 Aug 2014 00:00:00 -0400');
        dates.push('Thu, 10 Jul 2014 00:00:00 -0400');
        dates.push('Tue, 08 Jul 2014 00:00:00 -0400');
        dates.push('Thu, 12 Jun 2014 00:00:00 -0400');
        dates.push('Fri, 23 May 2014 00:00:00 -0400');
        dates.push('Wed, 23 Apr 2014 00:00:00 -0400');
        dates.push('Wed, 09 Apr 2014 00:00:00 -0400');
        dates.push('Wed, 05 Mar 2014 00:00:00 -0500');
        dates.push('Mon, 03 Mar 2014 00:00:00 -0500');
        dates.push('Thu, 20 Feb 2014 00:00:00 -0500');
        dates.push('Mon, 10 Feb 2014 00:00:00 -0500');
        dates.push('Fri, 31 Jan 2014 00:00:00 -0500');
        dates.push('Thu, 02 Jan 2014 00:00:00 -0500');
        dates.push('Mon, 16 Dec 2013 00:00:00 -0500');
        dates.push('Fri, 06 Dec 2013 00:00:00 -0500');
        dates.push('Wed, 04 Dec 2013 00:00:00 -0500');
        dates.push('Fri, 22 Nov 2013 00:00:00 -0500');
        dates.push('Fri, 15 Nov 2013 00:00:00 -0500');
        dates.push('Wed, 13 Nov 2013 00:00:00 -0500');
        dates.push('Wed, 06 Nov 2013 00:00:00 -0500');
        dates.push('Mon, 28 Oct 2013 00:00:00 -0400');
        dates.push('Mon, 21 Oct 2013 00:00:00 -0400');
        dates.push('Thu, 10 Oct 2013 00:00:00 -0400');
        dates.push('Wed, 02 Oct 2013 00:00:00 -0400');
        dates.push('Tue, 01 Oct 2013 00:00:00 -0400');
        dates.push('Fri, 13 Sep 2013 00:00:00 -0400');
        dates.push('Fri, 06 Sep 2013 00:00:00 -0400');
        dates.push('Mon, 12 Aug 2013 16:45:04 -0400');
        dates.push('Tue, 23 Jul 2013 14:45:04 -0400');
        dates.push('Thu, 11 Jul 2013 16:45:04 -0400');
    }
    var new_blog_count = 0;
    for(var i = 0; i < dates.length ; i++) {
        var blog_time = new Date(dates[i]).getTime();
        if(blog_time > lastVisit) {
            new_blog_count++;
        }
        else {
            break;
        }
    }
    return new_blog_count;
}

$(document).ready(function () {

    // code for blog badge
    $('.adorner').each(function(i) {
        var blog_time = new Date($(this).attr('blogTime')).getTime();
        if(lastVisit != "" && blog_time > lastVisit) {
            this.style.backgroundColor = "#3992ab";
        }
    });

    var new_blog_count = checkNotification();
    if (new_blog_count) {
        document.getElementById("new_blog_count").innerHTML = new_blog_count;
    }

    // code for click-to-copy functionality
    var client = new ZeroClipboard();
    client.on("ready", function(e) {
        var copyButtons = document.getElementsByClassName("btn-copy");
        for(var i = 0; i < copyButtons.length; i++) {
            client.clip(copyButtons[i]);
        }
    });

    // In the case that flash is disabled, fall back to browser API
    client.on("error", function(e) {
        var copyButtons = document.getElementsByClassName("btn-copy");
        for(var i = 0; i < copyButtons.length; i++) {
            copyButtons[i].addEventListener("click", function(clickEvent) {
                var id = clickEvent.target.getAttribute("data-clipboard-target");

                var range = document.createRange();
                range.selectNode(document.getElementById(id));

                var select = window.getSelection();
                select.removeAllRanges();
                select.addRange(range);

                try {
                    document.execCommand("copy");
                } catch(e) {
                    // Silently fail for now
                }

                select.removeAllRanges();
            });
        }
    });

    // Smooth scroll to anchor links
    $("a[href^='#']").on('click', function(e) {
        if(this.hash) {

            // prevent default anchor click behavior
            e.preventDefault();

            // store hash
            var hash = this.hash;

            // animate
            $('html, body').animate(
                {scrollTop: $(hash).offset().top},
                300,
                function () {
                    // when done, add hash to url (default click behaviour)
                    window.location.hash = hash;
                }
            );
        }
    });

    // jira search code
    $("#jira-search-button").on("click", submitJiraSearchForm);
    $("#jira-search-box").on("keypress", function searchKeypressEventHandler (e) {
        if(e.keyCode == 13) {
            submitJiraSearchForm();
        }
    });

    // add prettyprint class to code blocks for prettify.js
    var all_code = $('pre');
    all_code.attr('class', 'prettyprint');

    // run syntax highlighter
    prettyPrint();
});
