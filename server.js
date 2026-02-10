const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Environment configuration
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log(`Starting server in ${dev ? 'development' : 'production'} mode...`);

app
    .prepare()
    .then(() => {
        createServer(async (req, res) => {
            try {
                // Parse URL
                const parsedUrl = parse(req.url, true);

                // Handle request with Next.js
                await handle(req, res, parsedUrl);
            } catch (err) {
                console.error('Error occurred handling request:', req.url, err);
                res.statusCode = 500;
                res.end('Internal server error');
            }
        })
            .once('error', (err) => {
                console.error('Server error:', err);
                process.exit(1);
            })
            .listen(port, hostname, () => {
                console.log(`> Server ready on http://${hostname}:${port}`);
                console.log(`> Environment: ${process.env.NODE_ENV}`);
                console.log(`> Database: ${process.env.DATABASE_URI ? 'Connected' : 'Not configured'}`);
            });
    })
    .catch((err) => {
        console.error('Failed to start server:', err);
        process.exit(1);
    });

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    process.exit(0);
});