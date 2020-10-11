// @desc        get all bootcamp
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({hai : 'hai'})
}

// @desc        get single bootcamp
// @route       GET /api/v1/bootcamp/:id
// @access      public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({hai : req.params.id})
}

// @desc        creat bootcamp
// @route       POST /api/v1/bootcamps
// @access      private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({hai : 'hai'})
}

// @desc        update bootcamp
// @route       PUT /api/v1/bootcamp/:id
// @access      private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({hai : req.params.id})
}

// @desc        delete bootcamp
// @route       DELETE /api/v1/bootcamp/:id
// @access      private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({hai : req.params.id})
}