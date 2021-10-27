import React from 'react'

const Filters = () => {
    return (
        <div>
            <form>
                <label htmlFor="timeframe">Timeframe: </label>
                <select name="timeframe" id="">
                    <option value="starter">Choose an option</option>
                    <option value="starter">Past 30 Days</option>
                    <option value="starter">Upcoming</option>
                </select>
                <label htmlFor="fillrate">Shift Status: </label>
                <select name="fillrate" id="">
                    <option value="starter">Choose an option</option>
                    <option value="starter">Open</option>
                    <option value="starter">Full</option>
                </select>
                <label htmlFor="upcoming">Show upcoming only: </label>
                <label class="switch">
                <input name = 'upcoming 'type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </form>
        </div>
    )
}

export default Filters
