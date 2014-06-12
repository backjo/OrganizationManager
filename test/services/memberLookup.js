// Generated by CoffeeScript 1.7.1
(function() {
  var assert, memberLookup;

  memberLookup = require('../../services/memberLookup');

  assert = require('chai').assert;

  describe('Member Lookup Tests', function() {
    return it('Lookup by ISO', function(done) {
      return memberLookup.lookupByIso('6015899400214891', function(err, member) {
        assert.equal(member.first_name, 'Jonah', 'First name should be Jonah');
        assert.equal(member.last_name, 'Back', 'Last name should be Back');
        return done(err);
      });
    });
  });

}).call(this);