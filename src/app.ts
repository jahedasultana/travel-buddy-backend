import express, { type Request, type Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { router } from './app/routes/index'
import { envVars } from './app/config/env.config'
import { notFound } from './app/middlewares/notFound'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import bodyParser from 'body-parser';
import { SubscriptionControllers } from './app/modules/subscription/subscription.controllers'

export const app = express()

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), SubscriptionControllers.stripeWebhook);

app.set('trust proxy', 1)
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000',
        'https://travel-buddy-frontend-henna.vercel.app'
    ],
    credentials: true
}))
app.use(cookieParser())

app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: `travel buddy server running`
    })
})

app.use(notFound)
app.use(globalErrorHandler)