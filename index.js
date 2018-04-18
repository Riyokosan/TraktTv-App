const express = require('express')
const axios = require('axios')
const traktTV = require('trakt.tv')

const main = async() => {
    const date = await new Date();

    const res = await trakt.calendars.all.shows({
        start_date: date,
        days: '1',
        extended: 'full'
    })

    console.log(res.data)
}

main();