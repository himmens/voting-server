import Server from 'socket.io';

const SERVER_PORT = 8090;

export default function startServer(store) {
  const io = new Server().attach(SERVER_PORT);

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
}