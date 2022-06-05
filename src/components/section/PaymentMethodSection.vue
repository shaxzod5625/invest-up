<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>Способы оплаты</h3>
        </div><!-- end user-panel-title-box -->
        <div class="profile-setting-panel-wrap">
            <div class="tab-content mt-4" id="myTabContent">
                <div class="profile-setting-panel">
                    <h5 class="mb-4">Ваши сохраненные карты:</h5>
                    <div class="row g-gs">
                        <div class="col-md-6" v-for="item in SectionData.creditCardList" :key="item.id">
                            <div class="card card-credit card-full">
                                <div class="card-header d-flex align-items-center">
                                    <img :src="item.img" alt="" class="me-3 flex-shrink-0">
                                    <div>
                                        <span>{{ item.title }}</span>
                                        <span class="text-secondary smaller">{{ item.timeText }}</span>
                                    </div>
                                </div><!-- card-header -->
                                <div class="card-body">
                                    <h6 class="mb-2">{{ item.titleTwo }}</h6>
                                    <p class="fs-14">{{ item.addressText }}</p>
                                </div><!-- card-body -->
                                <div class="card-footer">
                                    <ul class="btns-group btn-group-2">
                                        <li><a href="#" class="btn btn-sm bg-danger-dim" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">Delete</a></li>
                                    </ul>
                                </div><!-- card-footer -->
                            </div><!-- card -->
                        </div><!-- end col -->
                    </div><!-- end row -->
                    <a href="#" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addNewCardModal">{{
                            SectionData.creditCardData.btnText
                    }}</a>
                </div><!-- end profile-setting-panel -->
            </div><!-- end tab-content -->
        </div><!-- end profile-setting-panel-wrap-->
        <!-- Modal -->
        <div class="modal fade" id="addBankAccountModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Bank Account</h4>
                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                            <em class="ni ni-cross"></em>
                        </button>
                    </div><!-- end modal-header -->
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Bank Name</label>
                            <input type="text" class="form-control form-control-s1" placeholder="Bank name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Branch Name</label>
                            <input type="text" class="form-control form-control-s1" placeholder="Branch name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Bank Location</label>
                            <input type="text" class="form-control form-control-s1" placeholder="Bank location">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Account Number</label>
                            <input type="text" class="form-control form-control-s1" placeholder="Account number">
                        </div>
                        <p class="small mb-2">Make sure your name and bank information match your bank account.
                            Otherwise, your transactions won't go through and you'll be charged a fee.</p>
                        <p class="small mb-3">By continue, you agree to the EnftyMart's Terms and Service and Privacy
                            Policy</p>
                        <a href="#" class="btn btn-primary w-100">Add Account</a>
                    </div><!-- end modal-body -->
                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end modal-->
        <!-- Modal -->
        <div class="modal fade" id="addNewCardModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Card</h4>
                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                            <em class="ni ni-cross"></em>
                        </button>
                    </div><!-- end modal-header -->
                    <div class="modal-body">
                        <div class="credit-card-form mb-4">
                            <h5 class="mb-3">Credit Card Info</h5>
                            <input type="text" class="form-control form-control-s1 mb-3"
                                placeholder="Credit card number">
                            <div class="row g-3">
                                <div class="col-lg-8">
                                    <input type="text" class="form-control form-control-s1" placeholder="Exp. Date">
                                </div><!-- end col -->
                                <div class="col-lg-4">
                                    <input type="text" class="form-control form-control-s1" placeholder="CVC">
                                </div><!-- end col -->
                            </div><!-- end row -->
                        </div><!-- end credit-card-form -->
                        <div class="billing-form-wrap">
                            <h5 class="mb-3">Billing Info</h5>
                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Address line 1">
                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Address line 2">
                            <div class="row g-3">
                                <div class="col-lg-6">
                                    <input type="text" class="form-control form-control-s1" placeholder="City">
                                </div><!-- end col -->
                                <div class="col-lg-6">
                                    <input type="text" class="form-control form-control-s1" placeholder="State">
                                </div><!-- end col -->
                            </div><!-- end row -->
                            <input type="text" class="form-control form-control-s1 my-3" placeholder="Zip code">
                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Country">
                            <button class="btn btn-primary w-100" type="button">Save Card</button>
                        </div><!-- end billing-form-wrap -->
                    </div><!-- end modal-body -->
                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end modal-->
        <!-- Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <img :src="SectionData.deleteModal.img" alt="" class="mb-3">
                        <h4 class="modal-tilte mb-2">{{ SectionData.deleteModal.titleTwo }}</h4>
                        <p class="modal-text">{{ SectionData.deleteModal.content }}</p>
                    </div><!-- end modal-body -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm" data-bs-dismiss="modal">{{
                                SectionData.deleteModal.btnText
                        }}</button>
                        <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">{{
                                SectionData.deleteModal.btnTextTwo
                        }}</button>
                    </div>
                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end modal-->
        <!-- Modal -->
    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
    name: 'PaymentMethodSection',
    data() {
        return {
            SectionData
        }
    },
    setup() {
        const message = '0x01948694c481cd38231261095f606c0a9444ce0e';
        const onCopy = (e) => {
            let target = e.trigger.querySelector(".tooltip-text");
            let prevText = target.innerHTML;
            target.innerHTML = "Copied";
            setTimeout(function () {
                target.innerHTML = prevText;
            }, 1000)
        }
        return { message, onCopy }
    }
}
</script>
