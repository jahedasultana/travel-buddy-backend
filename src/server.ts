import { app } from "./app"
import { envVars } from "./app/config/env.config"

const startServer = async () => {
    try {
        app.listen(envVars.PORT || 5000, () => {
            console.log(`travel buddy server running`)
        })
    } catch (error) {
        console.log('Error while database connection.', error)
    }
}

(async () => {
    await startServer()
})()