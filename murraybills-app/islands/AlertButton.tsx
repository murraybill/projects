import { Button } from "../components/Button.tsx";


export default function AlertButton () {
  return (
    <div>      
      <Button onClick={() => alert('bla')}>Alert</Button>
    </div>
  );
}
