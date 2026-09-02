
/* CrimBot AI — no external library/API required */
(function(){'use strict';
  var launcher=document.getElementById('crimbot-launcher'), panel=document.getElementById('crimbot-panel'), close=document.getElementById('crimbot-close'), input=document.getElementById('crimbot-input'), send=document.getElementById('crimbot-send'), answer=document.getElementById('crimbot-answer'), chatLog=document.getElementById('crimbot-chat-log');
  if(!launcher||!panel)return;
  var faq={
    'vision':'The Crimson is positioned as a luxury residential development in Borivali West, combining a refined Art Deco-inspired design language with elevated amenities and skyline-facing living.',
    'location':'The Crimson is at S.V. Road, Borivali West, Mumbai. The site highlights seamless connectivity to metro and railway stations, the Western Express Highway, schools, colleges, hospitals, shopping and dining.',
    'interior':'Explore premium interior spaces including the members lounge, game zone, kids play area, swimming pool, resto-bar, banquet hall, The Social, The Wellness, gymnasium, yoga room, steam & sauna, salon and entrance lobby.',
    'exterior':'The gallery includes exterior views such as the front gate, front entry, full building, front elevation, swimming pool, terrace, outside building and skyline views.',
    'experience':'Architecture is presented as inspired by Art Deco and the project experience is associated with Hafeez Contractor and a specialist consultant/partner network.',
    'amenities':'Key amenities shown include Members Lounge, Game Zone, Kids Play Area, Swimming Pool, Resto-Bar, Banquet Hall, The Social, Pickleball, Padel, Badminton, Glass Box, Gymnasium, Yoga Room, Steam & Sauna, Salon and Landscaped Retreat.',
    'gallery':'Open the Gallery page to switch between Interior and Exterior and explore the project imagery.',
    'contact':'The Crimson Sales Lounge, S.V. Road, Opp. Punit Nagar, Beside Chamundi Petrol Pump, Borivali West 400092. Email: sales@thecrimson.co. Info: info@imbuildcon.in.',
    'preview':'Use the Private Preview section to request a virtual tour, pricing details, floor plans, site visit, brochure or investment consultation.'
  };
  function reply(q){q=(q||'').toLowerCase(); if(/(hi|hello|hey)/.test(q))return'Hello. I’m CrimBot AI. Ask me about The Crimson, its gallery, amenities, location, architecture or a private preview.'; if(/interior/.test(q))return faq.interior; if(/exterior/.test(q))return faq.exterior; if(/amenit/.test(q))return faq.amenities; if(/where|location|address|connect/.test(q))return faq.location; if(/gallery/.test(q))return faq.gallery; if(/contact|email|mail|phone/.test(q))return faq.contact; if(/preview|brochure|price|pricing|floor plan|site visit|investment/.test(q))return faq.preview; if(/architect|hafeez|art deco|design/.test(q))return faq.experience; if(/vision|crimson|project/.test(q))return faq.vision; return 'I can help with the project vision, location, Interior, Exterior, amenities, Gallery, architecture, contact details and Private Preview options. Try one of the quick questions above.';}
  function open(){panel.classList.add('is-open');launcher.setAttribute('aria-expanded','true');} function shut(){panel.classList.remove('is-open');launcher.setAttribute('aria-expanded','false');}
  launcher.addEventListener('click',function(){panel.classList.contains('is-open')?shut():open();}); close&&close.addEventListener('click',shut);
  function addMessage(text, type){if(!chatLog)return;var el=document.createElement('div');el.className=type==='user'?'crimbot-chat-user':'crimbot-chat-bot';el.textContent=text;chatLog.appendChild(el);chatLog.scrollTop=chatLog.scrollHeight;}
  document.querySelectorAll('.crimbot-quick button').forEach(function(b){b.addEventListener('click',function(){var q=b.getAttribute('data-q')||b.textContent.trim();addMessage(q,'user');addMessage(reply(q),'bot');open();});});
  function submit(){var q=input.value.trim();if(!q)return;addMessage(q,'user');addMessage(reply(q),'bot');input.value='';open();input.focus();}
  send&&send.addEventListener('click',submit); input&&input.addEventListener('keydown',function(e){if(e.key==='Enter')submit();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')shut();});
})();
