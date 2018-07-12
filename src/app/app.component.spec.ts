import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {GlobalService} from './global.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './toast/toast.component';
import { HeaderStaticComponent } from './partials/nav/header-static/header-static.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { ConfirmComponent } from './confirm/confirm.component';
describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderStaticComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        ConfirmComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        GlobalService,
        AuthService,
        ApiService
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

  }));

  // Mocking promis
  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  // mocking routes location
  it('navigate to "" set location to root', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/');
  }));

  // creation of app done
  it('should create the app', async(() => {
    const compFixture = TestBed.createComponent(AppComponent);
    const app = compFixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
