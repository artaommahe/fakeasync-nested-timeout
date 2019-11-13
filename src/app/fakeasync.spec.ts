import { fakeAsync, tick } from '@angular/core/testing';

function waitTwice(callback: () => any): void {
  window.setTimeout(() =>
    window.setTimeout(() => callback())
  );
}

describe('fakeAsync', () => {
  it('nested timers', fakeAsync(() => {
    const callback = jasmine.createSpy('callback');

    waitTwice(callback);

    expect(callback).not.toHaveBeenCalled();

    tick();

    expect(callback).not.toHaveBeenCalled();
  }));
});
