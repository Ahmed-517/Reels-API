const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
    console.log(req.reqestTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
            // same as 
            // tours: tours
        }
    })
}

exports.getTour = (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;   // Convert String into a Number

    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    // another solustion 
    // if (!tour) { }

    const tour = tours.find(element => element.id === id)
    // Now we have the tour with specific ID 

    res.status(200).json({
        status: 'success',
        data: {
            tour
            // same as 
            // tour: tour
        }
    })
}

exports.createTour = (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign(
        {
            id: newId
        },
        req.body
        // same as 
        // req.body: req.body 
    );

    tours.push(newTour);    // Now we have the new Array with the new Tour

    // tours is an javascript object 
    // we shouldt convert it to json object using stringify
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })

    // We should't send the response twice
    // res.send('done');
}

exports.updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        statud: 'success',
        data: {
            // It's just a plcae holder
            tour: '<Updated tour here...>'
        }
    })
}

exports.deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(204).json({
        statud: 'success',
        data: null
    })
}