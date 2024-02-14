export class CounterService {
    number = 0;
    countChanges() {
        this.number++;
        console.log(this.number);
    }
}