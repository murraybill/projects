import java.io.*;
import java.net.*;
public class TestProxyServer {
    public static void main(String[] args) throws IOException {
        try {
            String host = "Proxy Server";
            int remoteport = 1025;
            int localport = 1026;
            // Printing a start-up message
            System.out.println("Starting proxy for " + host + ":" + remoteport
                    + " on port " + localport);
            // And start running the server
            runServer(host, remoteport, localport); // never returns
        }
        catch (Exception e)
        {
            System.err.println(e); //Prints the standard errors
        }
    }

    /**
     * It will run a single-threaded proxy server on
     * the provided local port.
     */
    public static void runServer(String host, int remoteport, int localport)
            throws IOException {
        // Creating a ServerSocket to listen for connections with  
        ServerSocket s = new ServerSocket(localport);
        final byte[] request = new byte[1024];
        byte[] reply = new byte[4096];
        while (true) {
            Socket client = null, server = null;
            try {
                // It will wait for a connection on the local port
                client = s.accept();
                final InputStream streamFromClient = client.getInputStream();
                final OutputStream streamToClient = client.getOutputStream();

                // Create a connection to the real server.
                // If we cannot connect to the server, send an error to the
                // client, disconnect, and continue waiting for connections.
                try {
                    server = new Socket(host, remoteport);
                } catch (IOException e) {
                    PrintWriter out = new PrintWriter(streamToClient);
                    out.print("Proxy server cannot connect to " + host + ":"
                            + remoteport + ":\n" + e + "\n");
                    out.flush();
                    client.close();
                    continue;
                }

                // Get server streams.
                final InputStream streamFromServer = server.getInputStream();
                final OutputStream streamToServer = server.getOutputStream();

                // a thread to read the client's requests and pass them
                // to the server. A separate thread for asynchronous.
                Thread t = new Thread() {
                    public void run() {
                        int bytesRead;
                        try {
                            while ((bytesRead = streamFromClient.read(request)) != -1) {
                                streamToServer.write(request, 0, bytesRead);
                                streamToServer.flush();
                            }
                        } catch (IOException e) {
                        }

                        // the client closed the connection to us, so close our
                        // connection to the server.
                        try {
                            streamToServer.close();
                        } catch (IOException e) {
                        }
                    }
                };

                // Start the client-to-server request thread running
                t.start();
                // Read the server's responses
                // and pass them back to the client.
                int bytesRead;
                try {
                    while ((bytesRead = streamFromServer.read(reply)) != -1) {
                        streamToClient.write(reply, 0, bytesRead);
                        streamToClient.flush();
                    }
                } catch (IOException e) {
                }
                // The server closed its connection to us, so we close our
                // connection to our client.
                streamToClient.close();
            } catch (IOException e) {
                System.err.println(e);
            } finally {
                try {
                    if (server != null)
                        server.close();
                    if (client != null)
                        client.close();
                } catch (IOException e) {
                }
            }
        }
    }
}