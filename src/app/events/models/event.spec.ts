import { Event } from './event';


describe('events/', () => {
  describe('Event', () => {
    it('should set title', () => {
      expect(new Event('test', '1234567', '/somepath').title).toBe('test');
    });

    it('should set completed to false by default', () => {
      expect(new Event('test', '1234567', '/somepath').completed).toBe(false);
    });
  });
});
