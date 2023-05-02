"use client"

export default function Error({error, reset}) {
    return (
        <div>
            <h1>This ain't loading up: {error.message}</h1>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}