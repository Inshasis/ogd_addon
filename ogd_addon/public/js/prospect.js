frappe.ui.form.on('Prospect', {
    refresh: function(frm) {
        var doc = frm.doc;
        var shouldHideCreateButton = true;
        var createButton = frm.page.inner_toolbar.find('.btn:contains("Create")');

        createButton.toggle(!shouldHideCreateButton);

        frm.add_custom_button(__("Customer"), frm.cscript.make_customer, __("Create"));
        frm.add_custom_button(__("Opportunity"), function() {
            frm.trigger("make_opportunity");
        }, __("Create"));
    }
});

frappe.ui.form.on('Prospect', {
   refresh: function(frm) {
    frm.add_custom_button(__("Create Customer"), function() {
		frappe.model.open_mapped_doc({
			method: "erpnext.crm.doctype.prospect.prospect.make_customer",
			frm: frm
		});
    }).css({ 'background-color': '#18b81b', 'color': 'white' });
   }
});