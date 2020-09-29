$(document).ready(function(){
  let main_nav_items = $("#main-nav li a");
  let footers = $(".pip-footer");
  let sub_navs = $(".sub-nav");
  let left_values = [
    {"stat" : [-8, -138, -264] },
    {"inv" : [135, -5, -114, -203, -298, -393, -493] },
    {"data" : [287, 152, 19]},
    {"map" : []},
    {"radio" : []}
  ];


  // the data used in here are from screenshots I found on google and some random values as well.
  let attrib_texts = [
    "Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.",
    "Perception is your environmental awareness and \"sixth sense,\" and affects weapon accuracy in V.A.T.S.",
    "Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.",
    "Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.",
    "Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.",
    "Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.",
    "Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits."
  ];

  let perks_texts = [
    [ "Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.",
      "When you successfully pacify an animal, you can incite it to attack.",
      "When you successfully pacify an animal, you can give it specific commands."
    ],
    [ "Swing for the fences! Do 20% more melee weapon damage.",
      "You now do 40% more melee weapon damage and gain a chance to disarm your opponent.",
      "You now do 60% more melee weapon damage and gain an increaased chance to disarm your opponent.",
      "You now do 80% more melee weapon damage and hit all targets in front of you.",
      "You now do double damage with a melee weapon, and gain a chance to cripple your opponent, or grand slam their head clean off!"
    ],
    [ "+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!",
      "You now inflict +10% damage in combat.",
      "You now inflict +15% damage in combat.",
      "When an enemy explodes, nearby enemies may suffer the same fate."
    ],
    [ "Your quick hands and sticky fingers make picking pockets 25% easier.",
      "Picking pockets is now 50% easier. You can place a live grenade in a person's inventory.",
      "Picking pockets is now 75% easeir, and you can steal equiped weapons.",
      "Picking pockets is now twice as easy, and you can steal equipped items."
    ],
    [ "It's all about focus. You have improved control and can hold your breath longer when aiming with scopes.",
      "Non-automatic, scoped rifles have a chance of knocking down your target.",
      "Non-automatic, scoped rifles gain +25% accuracy to head shots in V.A.T.S."
    ]
  ];

  for(let item of left_values){
    let key = Object.keys(item)[0];
    $("." + key + "-nav").css({"left" : item[key][0] + "px"});
    animate_and_opacity($("." + key + "-nav ul li a"), $("." + key + "-nav ul li a")[0]  , key);
  }
  $(".status-section").addClass("visible");
// =====================================================================================
  let image_sources = ["wave_classical", "wave_diamond"];
  let radio_list = $(".radio-container .radio");
  radio_list.on("click", function(){
    $(".radio.selected-stat").removeClass("selected-stat");
    $(this).addClass("selected-stat");
    $(".radio-image img").attr("src", "./images/" + image_sources[$(this).index()] + ".gif");
  });

// =====================================================================================
  let stats_list = [
                      ["Locations Discovered,0", "Locations Cleared,0", "Days Passed,0", "Hours Slept,0", "Hourse Waiting,0", "Caps Found,576", "Most Caps Carried,576", "Junk Collected,30", "Chests Looted,0", "Magazines Found,0", "Food Eaten,0", "Stimpaks Taken,0", "Rad-X Taken,0", "Radaway Taken,0", "Chems Taken,0", "Fusion Cores Used,0", "Times Addicted,0", "Mines Disarmed,0", "Pants Exploded,0", "Corpses Eated,0", "Persuasion Successes,1", "Bobbleheads Collected,0", "Sandman Kills,0", "Paralyzing Punches,0", "Robots Hacked,0", "Mysterious Stranger Visits,0", "Investments Made,0", "Animals Friended,2", "Wasteland Whispers,0", "Intimidations,0", "Cores Ejected,0", "Bright Ideas,0"],
                      ["Quests Completed,1", "Misc Objectives Completed,0", "Main Quests Completed,0", "Side Quests Completed,0"],
                      ["People Killed,0", "Animals Killed,1", "Creatures Killed,0", "Robots Killed,0", "Synths Killed,0", "Turrets Killed,0", "Legendary Enemies Killed,0", "Critical Strikes,0", "Sneak Attacks,0", "Backstabs,0", "Weapons Disarmed,0", "Grand Slams,1", "Fits of Rage,1", "Money Shots,0", "Grim Reaper Sprints,0", "Four Leaf Clovers,4", "Ricochets,0"],
                      ["Weapons Mods Crafted,0", "Armor Mods Crafted,0", "Plants Harvested,0", "Chems Crafted,0", "Food Cooked,0", "Workshops Unlocked,0", "Items Scrapped,0", "Objects Built,0", "Supply Lines Created,0"],
                      ["Locks Picked,0", "Computers Hacked,8", "Pockets Picked,0", "Items Stolen,0", "Assaults,0", "Murders,0", "Trespasses,0"]
                   ];
  stats_list[0].forEach((item, i) => {
    let split = item.split(",");
    $(".stats-stats").append("<div class='stat'> <span>" + split[0] + "</span> <span>" + split[1] + "</span></div>");
  });

  let stats = $(".stats-container > div");
  stats.on("click", function(){
    $(".stats-container > div.selected-stat").removeClass("selected-stat");
    $(this).addClass("selected-stat");
    $(".stats-stats").html("");
    let ind = $(this).index();
    stats_list[ind].forEach((item, i) => {
      let split = item.split(",");
      $(".stats-stats").append("<div class='stat'> <span>" + split[0] + "</span> <span>" + split[1] + "</span></div>");
    });

  });

// =====================================================================================
  let d = new Date();
  $(".data-footer .time").text(d.getHours() + ":" + d.getMinutes());
  $(".map-footer .time").text(d.getHours() + ":" + d.getMinutes());
  setInterval(function(){
    d = new Date();
    $(".data-footer .time").text(d.getHours() + ":" + d.getMinutes());
    $(".map-footer .time").text(d.getHours() + ":" + d.getMinutes());
  },30000);
// =====================================================================================
  let quest_list = ["The Way Life Should Be", "Cleansing the Land", "Hull Breach", "Blood Tide", "Living on the Edge", "Explore Vault 88", "A Model Citizen", "Mercer Safehouse", "The Silver Shroud", "Ghoul Problem at Finch Farm", "Defend Abernathy Farm", "Cambridge Polymer Labs", "Synth Retention", "Underground Undercover", "Special Delivery", "The Lost Patrol", "Shadow of Steel", "Semper Invicta"];
  quest_list.forEach((item, i) => {
    $(".quest-container").append("<div class='quest'>" + item + "</div>");
  });

// =====================================================================================
    let workshop_list = ["County Crossing", "Graygarden", "Greentop Nursery", "Oberland Station", "Outpost Zimonja", 'Red Rocket Truck Stop', "Sanctuary Hills", "Starlight Drive-In", "Tenpines Bluff"];
    workshop_list.forEach((item, i) => {
      $(".workshop-container").append("<div class='workshop'>" + item + "</div>");
    });

    rand = ()=>{
      return Math.round(Math.random() * 90);
    }

    let values = Array.from({length: workshop_list.length},()=> Array.from({length:7}, ()=>Math.floor(Math.random() * 70)) );
    let workshops = $(".workshop-container .workshop");
    workshops.on("mouseenter", function(){
      let ind = $(this).index();
      $(".workshop-stats > div").each((i, item)=>{
        $(item).find(".value").text(values[ind][i]);
      });



    });


// =====================================================================================
  let aid_list = ["Corn", "Food Paste (2)", "Lad's Life", "Programmer's Digest", "QUICK SAVE", "Rad-X (7)", "RadAway (5)", "Radscorpion Meat (2)", "Stimpak" ];
  aid_list.forEach((item, i) => {
    $(".aid-container").append("<div class='aid'>" + item + "</div>")
  });


// =====================================================================================
    let ammo_list = [".308 Round (232)", ".38 Round (1792)", ".44 Round (245)", ".45 Round (552)", ".50 Caliber (67)", "10mm Round (655)", "5.56 Round (563)", "5mm Round (1719)", "Fusion Cell (64)", "Mini Nuke (2)", "Shotgun Shell (26)"];
    ammo_list.forEach((item, i) => {
      $(".ammo-container").append("<div class='ammo'>" + item + "</div>");
    });


// =====================================================================================
  let junk_list = ["Baseball", "Desk Fan", "Duck Tape (2)", "Fancy Hairbrush (2)", "Ladle", "Oven Mitt", "Paint Can", "Toy Rocketship", "Wonderglue"];
  junk_list.forEach((item, i) => {
    $(".junk-container").append("<div class='junk'>" + item + "</div>");
  });

// ===================================================================================
  let miscs = $(".misc-container .misc");
  miscs.on("mouseenter", function(){
    $(".misc-stats.show-stats").removeClass("show-stats");
    $($(this).attr("data-target")).addClass("show-stats");
  });

// ===================================================================================
  let apparel_list = ["Leather Left Arm", "Leather Right Arm", "Leather Right Leg", "Mining Helmet", "Raider Chest Piece", "Raider Left Leg", "Vault 111 Jumpsuit", "Wedding Ring", "Welding Goggles"];
  apparel_list.forEach((item, i) => {
    $(".apparel-container").append("<div class='apparel use-weapon' data-target='.apparel" + (i+1) + "'>" + item + "</div>");
  });

  let apparels = $(".apparel-container .apparel");
  apparels.on("click", function(){
    if($(this).hasClass("use-weapon")){
      $(this).removeClass("use-weapon");
    }else{
      $(this).addClass("use-weapon");
    }
  });

  apparels.on("mouseenter", function(){
    $(".apparel-stats.show-stats").removeClass("show-stats");
    $($(this).attr("data-target")).addClass("show-stats");
  })

// ====================================================================================
  let weapons_list = [ "10mm Pistol", "Baseball Bat", "Fat Man", "Fragmentation Mine (6)", "Laser Musket", "Machete", "Minigun", "Molotov Cocktail (3)", "Pipe Bolt-Action Pistol", "Short Double-Barrel Shotgun"];
  weapons_list.forEach((item, i) => {
    $(".weapons-container").append("<div class='weapon"  + (i==0? " use-weapon" : "") +  "' data-target='.weapon" + (i+1) + "'>" + item + "</div>");
  });

  let weapons = $(".weapons-container .weapon");
  weapons.on("click", function(){
    $(".weapon.use-weapon").removeClass("use-weapon");
    $(this).addClass("use-weapon");
  });

  weapons.hover(function(){
    $(".weapon-stats.show-stats").removeClass("show-stats");
    $( $(this).attr("data-target") ).addClass("show-stats");
  }, function(){
    $(".weapon-stats.show-stats").removeClass("show-stats");
    $( $(".weapon.use-weapon").attr("data-target") ).addClass("show-stats");
  });

// ==========================================================
  let current_rank = 0;
  let perks = $(".perk");
  let index = 0;
  let star_fill = "<img src='./images/star_fill.png' >";
  let star_stroke = "<img src='./images/star_stroke.png' >";
  let stars = star_fill + star_stroke + star_stroke;
  $(".prev-rank").css({"opacity" : 0.3});
  $("#rank-stars").attr("alt", current_rank+1);
  $(".star-container").html(stars);
  perks.eq(0).addClass("perk-selected");

  perks.on("click", function(){
    perks.each((i, item)=>{
      if($(item).hasClass("perk-selected")){
        $(item).removeClass("perk-selected");
      }
    });
    $(this).addClass("perk-selected");
    index = $(this).index();
    current_rank = 0;
    $(".prev-rank").css({"opacity" : 0.3});
    $(".next-rank").css({"opacity" : 1});
    $("#rank-description").text(perks_texts[index][current_rank]);
    $("#rank-stars").attr("alt", current_rank+1);
    let len = perks_texts[index].length;
    stars = star_fill;
    for(let x=1; x<len; x++){
      stars += star_stroke;
    }
    $(".star-container").html(stars);
  });

  $(".next-rank").on("click", function(){
    let len = perks_texts[index].length;
    if(current_rank+1 < len){
      if(current_rank == 0){
          $(".prev-rank").css({"opacity" : 1});
      }
      current_rank++;
      $("#rank-description").text(perks_texts[index][current_rank]);
      $("#rank-stars").attr("alt", current_rank+1);
      stars = "";
      for(let x=0; x<=current_rank; x++){
        stars += star_fill;
      }
      for(let x=0; x < len-current_rank-1; x++){
        stars += star_stroke;
      }
      $(".star-container").html(stars);
    }
    if(current_rank == len-1){
      $(this).css({"opacity" : 0.3});
    }

  });

  $(".prev-rank").on("click", function(){
    let len = perks_texts[index].length;
    if(current_rank-1 > -1){
      if(current_rank == len-1){
          $(".next-rank").css({"opacity" : 1});
      }
      current_rank--;
      $("#rank-description").text(perks_texts[index][current_rank]);
      $("#rank-stars").attr("alt", current_rank+1);
      stars = "";
      for(let x=0; x<=current_rank; x++){
        stars += star_fill;
      }
      for(let x=0; x < len-current_rank-1; x++){
        stars += star_stroke;
      }
      $(".star-container").html(stars);
    }
    if(current_rank == 0){
      $(this).css({"opacity" : 0.3});
    }
  })

// ========================================================================
  let first_hover = true;
  $(".attribs-container .strength").css({  "background" : "#14fe17", "color" : "#272b23"});
  $(".attribs-container .attrib").hover( function(){
    if(first_hover){
      $(this).parent().children().eq(0).css({  "background" : "#272b23", "color" : "#14fe17"});
      first_hover = false;
    }
    let index = $(this).index();
    $(".attrib-text p").text(attrib_texts[index]);
    $(this).css({ "background" : "#14fe17", "color" : "#272b23"});
  },function(){
    $(this).css({ "background" : "#272b23", "color" : "#14fe17"});
  });


// =========================================================================
  main_nav_items.on("click", function(){
    for(let item of main_nav_items){
      if($(item).parent().hasClass("active")){
        $(item).parent().removeClass("active");
        break;
      }
    }
    // for reset
    for(let item of left_values){
      let key = Object.keys(item)[0];
      $("." + key + "-nav").css({"left" : item[key][0] + "px"});
      animate_and_opacity($("." + key + "-nav ul li a"), $("." + key + "-nav ul li a")[0]  , key);
    }

    $(this).parent().addClass("active");
    for(let item of sub_navs){
      if($(item).hasClass("visible")){
        $(item).removeClass("visible").addClass("invisible");
      }
    }

    let target = $(this).attr("class");
    $( "." + target + "-nav").removeClass("invisible").addClass("visible");
    $(".sub-section.visible").removeClass("visible").addClass("invisible");
    bind_sub_navs(target);

    let footer = $(this).attr("data-footer");
    footers.each((i, item)=>{
      $(item).removeClass("visible invisible");
      if($(item).hasClass(footer)){
        $(item).addClass("visible");
      }else{
        $(item).addClass("invisible");
      }
    })

  });

// ============================================================================
  bind_sub_navs("stat");
  function bind_sub_navs(target){
    let current_sub_nav_items = $("." + target + "-nav ul li a");
    let target_section = current_sub_nav_items.eq(0).attr("data-target");
    $("." + target_section).removeClass("invisible").addClass("visible");

    current_sub_nav_items.on("click", function(e){
      animate_and_opacity(current_sub_nav_items, e.currentTarget, target);
      let data_target = $(this).attr("data-target");
      $(".sub-section.visible").removeClass("visible").addClass("invisible");
      $("." + data_target).removeClass("invisible").addClass("visible");

      $(".footer-bar.visible").removeClass("visible").addClass("invisible");
      $($(this).attr("data-footer")).removeClass("invisible").addClass("visible");
    });

  }

// ============================================================================================
  function animate_and_opacity(items, current, target){
    let index = items.index($(current));
    $("." + target + "-nav").css({'left' : left_values[left_values.findIndex(x => x[target])][target][index] + "px"});

    items.each((i, item)=>{
      $(item).removeClass("selected adjacent not-selected").addClass("not-selected");
    });

    $(current).removeClass("not-selected").addClass("selected");
    if(index-1 >=0){
      items.eq(index-1).removeClass("not-selected").addClass("adjacent");
    }
    if(index+1 < items.length){
      items.eq(index+1).removeClass("not-selected").addClass("adjacent");
    }
    // section contents


  }














})
