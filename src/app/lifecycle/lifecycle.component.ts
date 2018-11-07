import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit, SimpleChanges
} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html',
    styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor() {
    }

    public startInterval() {
        this.subscriptions.push(interval(1000).subscribe(i => {
            console.log(i);
        }));
    }

    public stopInterval() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.subscriptions = [];
    }

    // Lifecycle Hooks

    public ngAfterContentChecked(): void {
        console.log('AfterContentChecked');
    }

    public ngAfterContentInit(): void {
        console.log('AfterContentInit');
    }

    public ngAfterViewChecked(): void {
        console.log('AfterViewChecked');
    }

    public ngAfterViewInit(): void {
        console.log('AfterViewInit');
    }

    public ngDoCheck(): void {
        console.log('DoCheck');
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('OnChanges', changes);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        console.log('OnDestroy');
    }

    public ngOnInit(): void {
        console.log('OnInit');
    }
}
