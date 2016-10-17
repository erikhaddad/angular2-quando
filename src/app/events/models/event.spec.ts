import { Event } from './event';


describe('events/', () => {
  describe('Event', () => {
    it('should set title', () => {
      expect(new Event('test').title).toBe('test');
    });

    it('should set completed to false by default', () => {
      expect(new Event('test').completed).toBe(false);
    });
  });
});
