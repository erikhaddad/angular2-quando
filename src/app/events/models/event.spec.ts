import { Event } from './event';


describe('events/', () => {
  describe('Event', () => {
    it('should set title', () => {
      expect(new Event('test', '1234567', '/somepath').title).toBe('test');
    });
  });
});
