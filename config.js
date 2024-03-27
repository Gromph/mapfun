var config = {
    style: 'mapbox://styles/gromph99/clu4l74hj026e01oigmt295hj/draft',
    accessToken: 'pk.eyJ1IjoiZ3JvbXBoOTkiLCJhIjoiY2x1NGt5Z3ZnMTd5NzJpbzMwY2g2andtNSJ9.Xks1OhTa4pw29GO4wKzPiw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    //inset: true,  // box in lower right
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: '<img class="stnd skip-lazy default-logo dark-version" width="238" height="100" alt="Rogue River Greenway" src="https://roguerivergreenway.org/wp-content/uploads/2018/03/newlogo.png" srcset="https://roguerivergreenway.org/wp-content/uploads/2018/03/newlogo.png 1x, https://roguerivergreenway.org/wp-content/uploads/2016/08/RRG-Logo_376.png 2x">',
    subtitle: 'Building paths for the future. Scroll down to explore.',
    //byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Emerald icon by Andrew Wedderburn licensed under <a href=https://creativecommons.org/licenses/by-sa/4.0/>Creative Commons</a> ',
    chapters: [
        {
            id: 'overview',
            alignment: 'left',
            hidden: false,
            title: 'Grants Pass To Bear Creek Greenway',
            //image: './path/to/image/source.png',
            description: 'The ultimate goal is to connect the City of Grants Pass through the cities of Rogue River and Gold Hill and on to Central Point where it will connect to the existing Bear Creek Greenway.<br><br><a href=map.html>View interactive map</a>',
            location: {
                center: [-123.12328, 42.42930],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gp-tp',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'gp-rr',
            alignment: 'left',
            hidden: false,
            title: 'Grants Pass To Rogue River (Future)',
            description: 'Planning is underway to determine the best route to connect Grants Pass to Rogue River.',
            location: {
                center: [-123.25188, 42.48929],
                zoom: 11.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },        
        {
            id: 'gp-tp',
            alignment: 'left',
            hidden: false,
            title: 'Grants Pass To Tom Pearce (Completed)',
            //image: './path/to/image/source.png',
            description: 'A 3/4 mile paved trail from the end of N St to Tom Pearce Park has been completed.<br>There\'s a few free parking spaces on N St or $5 parking at Tom Pearce <br><br>Directions: <a href="https://maps.app.goo.gl/AQAJJXzoFJu6R1SU6" target="_blank"><img src="images/emerald.svg" style="width: 25px; height: 25px;">Grants Pass N St Trailhead</a>&nbsp;&nbsp;&nbsp;<a href="https://maps.app.goo.gl/ypYJEfqWAVYf3p2k9" target="_blank"><img src="images/emerald.svg" style="width: 25px; height: 25px;">Tom Pearce Park Trailhead</a>',
            location: {
                center: [-123.27845, 42.43366],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rr-vrps',
            alignment: 'left',
            hidden: false,
            title: 'Rogue River To Valley Of The Rogue State Park (Completed)',
            description: 'Entrance is near the north side of Depot St Bridge in Rogue River, follows the river through Valley of The Rogue State Park.',
            location: {
                center: [-123.14453, 42.43007],
                zoom: 13.5,
                pitch: 60,
                bearing: 55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vrps-gh',
            alignment: 'left',
            hidden: false,
            title: 'Valley Of The Rogue State Park to Gold Hill (Partially Completed)',
            description: 'The path continues under I-5 and on to Gold Hill.',
            location: {
                center: [-123.11510, 42.44767],
                zoom: 13,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gh-ghsp',
            alignment: 'left',
            hidden: false,
            title: 'Downtown Gold Hill to Gold Hill Sports Park (Completed)',
            description: 'Paved path starts near the corner of 4th St and Dardanelle St and continues through Gold Hill Sports Park ',
            location: {
                center: [-123.04756, 42.43312],
                zoom: 15,
                pitch: 60,
                bearing: -53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
